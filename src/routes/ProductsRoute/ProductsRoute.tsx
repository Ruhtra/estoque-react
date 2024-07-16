import { CreateProductDialog } from "../../components/Product/CreateProductDialog/CreateProductDialog"
import { Loading } from "../../components/Loading/Loading"
import { ProductComponent } from "../../components/Product/ProductComponent/ProductComponent"
import { useGetAllProduct } from "../../services/Querys/Product/Product"

import './ProductsRoute.css'

export function ProductsRoute() {
    const { data: products, status: productsStatus } = useGetAllProduct()


    if (productsStatus == "loading") return <Loading />
    if (productsStatus == "error") return <h2>Houve um erro ao carregar produtos</h2>

    return (
        <>
            {
                products?.map(p => {
                    return <ProductComponent key={p.id} product={p} />
                })
            }

            <br />
            <br />

            <CreateProductDialog>
                <button>add product</button>
            </CreateProductDialog>


        </>
    )
}