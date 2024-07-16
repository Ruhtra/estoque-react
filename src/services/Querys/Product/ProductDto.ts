export interface CreateProductRequestDto {
    name: string
}



export interface GetAllProductResponseDto {
    id: string
    name: string
    price: number
    amount: number
}




export interface GetProductRequestDto {
    id: string
}

export interface GetProductResponseDto {
    id: string
    name: string
    price: number
    amount: number
}

export interface DeleteProductRequestDto {
    id: string
}