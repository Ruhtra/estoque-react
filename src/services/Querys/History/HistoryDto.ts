export enum OperationHistoryEnum {
    increase = 'increase',
    decrease = 'decrease'
}

export type GetAllHistoryRequestDto = {
    operation?: OperationHistoryEnum
}


export type GetAllHistoryResponseDto = {
    id: string
    amount: number
    price: number
    operation: OperationHistoryEnum,
    createdAt: Date,
    product: {
        name: string
    }

}