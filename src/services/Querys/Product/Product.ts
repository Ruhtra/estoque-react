import { useMutation, useQuery } from "react-query";
import { api } from "../../Api";
import { CreateProductRequestDto, DeleteProductRequestDto, GetAllProductResponseDto, GetProductRequestDto, GetProductResponseDto } from "./ProductDto";
import { queryClient } from "../../QueryClient";

export function useGetAllProduct() {
    return useQuery<GetAllProductResponseDto[]>({
        queryKey: ['AllProducts'],
        queryFn: async () => {
            const response = await api.get<GetAllProductResponseDto[]>('/product/getall')
            return response.data
        },
        staleTime: 1000 * 60
    })
}

export function useGetProduct({ id }: GetProductRequestDto) {
    return useQuery<GetProductResponseDto[]>({
        queryKey: ['Product', id],
        queryFn: async () => {
            const response = await api.get<GetProductResponseDto[]>('/product/get', {
                params: {
                    id: id
                }
            })
            return response.data
        },
        staleTime: 1000 * 60
    })
}


export function useCreateProduct() {
    return useMutation(
        async (product: CreateProductRequestDto) => {
            await api.post('/product/create', product)
        }, {
            onSuccess: () => {
                queryClient.invalidateQueries(['AllProducts'])
                queryClient.invalidateQueries(['AllHistory'])
            }
        }
    )
}

export function useDeleteProduct() {
    return useMutation(
        async ({ id }: DeleteProductRequestDto) => {
            await api.delete('/product/delete', {
                params: {
                    id: id
                }
            })
        }, {
            onSuccess: (_, { id }) => {
                queryClient.invalidateQueries('AllProducts')
                queryClient.invalidateQueries(['Product', id])
                queryClient.invalidateQueries(['AllHistory'])
            }
        }
    )
}