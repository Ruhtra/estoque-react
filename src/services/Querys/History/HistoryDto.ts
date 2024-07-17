export enum OperationHistoryEnum {
    increase = 'increase',
    decrease = 'decrease'
}

export type GetAllHistoryResponseDto = {
    id: string
    amount: number
    price: number
    operation: OperationHistoryEnum
    product: {
        name: string
    }

}