import { CreateProductDialog } from "../components/CreateProductDialog/CreateProductDialog"
import { Loading } from "../components/Loading/Loading"
import { useGetAllProduct } from "../services/Querys/Product/Product"

import './Product.css'

export function Products() {
    const { data: products, status: productsStatus } = useGetAllProduct()


    if (productsStatus == "loading") return <Loading />
    if (productsStatus == "error") return <h2>Houve um erro ao carregar produtos</h2>

    return (
        <>
            {
                products?.map(p => {
                    return <p key={p.id}>{JSON.stringify(p)}</p>
                })
            }

            <CreateProductDialog>
                <button>add product</button>
            </CreateProductDialog>


        </>
    )
}