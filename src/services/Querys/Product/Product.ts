import { useQuery } from "react-query";
import { GetAllProductResponseDto } from "./ProductDto";
import { api } from "../../Api";

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