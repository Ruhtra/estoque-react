export type IncreaseStockRequestDto = {
    id: string
    amount: number,
    price: number
}

export type DecreaseStockRequestDto = {
    id: string
    amount: number
}