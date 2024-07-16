import { useDeleteProduct } from '../../../services/Querys/Product/Product'
import { GetAllProductResponseDto } from '../../../services/Querys/Product/ProductDto'
import { OpenProductDialog } from '../OpenProductDialog/OpenProductDialog'
import './ProductComponent.css'

export type ProductComponentProps = {
    product: GetAllProductResponseDto
}

export function ProductComponent({ product }: ProductComponentProps) {

    return (<>
            <span>{JSON.stringify(product)}</span>
        <OpenProductDialog product={product}>
            <button>open</button>
        </OpenProductDialog>
    </>)
}