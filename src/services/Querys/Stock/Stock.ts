import { useMutation } from "react-query"
import { api } from "../../Api"
import { queryClient } from "../../QueryClient"
import { IncreaseStockRequestDto } from "./StockDto"

export function useIncreaseStock() {
    return useMutation(
        async ({ id: idProduct, price, amount }: IncreaseStockRequestDto) => {
            await api.post('/stock/increase', {
                id: idProduct,
                price,
                amount
            })
        }, {
            onSuccess: (_, { id }) => {
                queryClient.invalidateQueries('AllProducts')
                queryClient.invalidateQueries(['Product', id])
            }
        }
    )
}