export interface CreateProductRequestDto {
    name: string
    measureType: string
}


export interface GetAllProductResponseDto {
    id: string
    name: string,
    stock: {
        id: string,
        amount: number
    },
    measureType: {
        id: string,
        name: string
    }
}



export interface GetProductRequestDto {
    id: string
}

export interface GetProductResponseDto {
    id: string
    name: string,
    stock: {
        id: string,
        amount: number
    },
    measureType: {
        id: string,
        name: string
    }
}
export interface DeleteProductRequestDto {
    id: string
}