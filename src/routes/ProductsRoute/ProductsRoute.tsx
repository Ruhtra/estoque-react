import { CreateProductDialog } from "../../components/Product/Dialog/CreateProductDialog"
import { Loading } from "../../components/UI/Loading/Loading"
import { useGetAllProduct } from "../../services/Querys/Product/Product"

import { Title } from "../../components/UI/Title/Title"
import { DialogProvider } from "../../components/UI/Dialog/DialogContext"

import './ProductsRoute.css';
import { OpenProductDialog } from "../../components/Product/Dialog/OpenProductDialog"
import { Page } from "../../components/UI/Route/Page"
import { Route } from "../../components/UI/Route/Route"

export function ProductsRoute() {
    const { data: products, status: productsStatus } = useGetAllProduct()


    if (productsStatus == "loading") return <Loading />
    if (productsStatus == "error") return <h2>Houve um erro ao carregar produtos</h2>

    return (
        <Route>
            <Title title="Products"></Title>
            <Page>
                <div className="tabela">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Amount</td>
                                <td>Med</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map(p => {
                                    return <tr key={p.id}>
                                        <td>{p.name}</td>
                                        <td>{p.stock.amount}</td>
                                        <td>{p.measureType.name}</td>
                                        <td>
                                            <DialogProvider>
                                                <OpenProductDialog product={p} ><button>open</button></OpenProductDialog>
                                            </DialogProvider>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <DialogProvider>
                    <CreateProductDialog>
                        <button className="add">add product</button>
                    </CreateProductDialog>
                </DialogProvider>
            </Page >
        </Route>

    )
}