import { CreateProductDialog } from "../../components/Product/CreateProductDialog/CreateProductDialog"
import { Loading } from "../../components/Loading/Loading"
import { ProductComponent } from "../../components/Product/ProductComponent/ProductComponent"
import { useGetAllProduct } from "../../services/Querys/Product/Product"

import { Title } from "../../components/Title/Title"
import { DialogProvider } from "../../components/Dialog/DialogContext"

export function ProductsRoute() {
    const { data: products, status: productsStatus } = useGetAllProduct()


    if (productsStatus == "loading") return <Loading />
    if (productsStatus == "error") return <h2>Houve um erro ao carregar produtos</h2>

    return (
        <div className="productsRoute">
            <Title title="Products"></Title>

            <ul className="list">
                <li>
                    <span>Name</span>
                    <span>Amount</span>
                    <span></span>
                </li>
                {
                    products?.map(p => {
                        return <li key={p.id}><ProductComponent product={p} /></li>
                    })
                }

            </ul>

            <br />
            <DialogProvider>
                <CreateProductDialog>
                    <button className="add">add product</button>
                </CreateProductDialog>
            </DialogProvider>
        </div>
    )
}