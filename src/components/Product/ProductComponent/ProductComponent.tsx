import { useDeleteProduct } from '../../../services/Querys/Product/Product'
import { GetAllProductResponseDto } from '../../../services/Querys/Product/ProductDto'
import './ProductComponent.css'

export type ProductComponentProps = {
    product: GetAllProductResponseDto
}

export function ProductComponent({ product }: ProductComponentProps) {
    const { mutate, status: status } = useDeleteProduct()

    function deleteProduct(id: string) {
        mutate({ id })
    }

    return (<>
        {status == "idle"
            ? <>
                <span>{JSON.stringify(product)}</span> <button onClick={() => deleteProduct(product.id)}>delete</button>
            </>
            : <>
                {status == "loading" && <span>Carregando...</span>}
                {status == "error" && <span>error</span>}
                {/* {status == "success" && <span>sucesso</span>} */}
            </>
        }
    </>)
}