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
            <button>Open</button>
        </OpenProductDialog>
    </>)
}