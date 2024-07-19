import { CreateProductDialog } from "../../components/Product/CreateProductDialog/CreateProductDialog"
import { Loading } from "../../components/Loading/Loading"
import { useGetAllProduct } from "../../services/Querys/Product/Product"

import { Title } from "../../components/Title/Title"
import { DialogProvider } from "../../components/Dialog/DialogContext"

import './ProductsRoute.css';
import { OpenProductDialog } from "../../components/Product/OpenProductDialog/OpenProductDialog"

export function ProductsRoute() {
    const { data: products, status: productsStatus } = useGetAllProduct()


    if (productsStatus == "loading") return <Loading />
    if (productsStatus == "error") return <h2>Houve um erro ao carregar produtos</h2>

    return (
        <div className="productsRoute">
            <Title title="Products"></Title>
            <div className="page">
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
                                        <td>null</td>
                                        <td><OpenProductDialog product={p} ><button>open</button></OpenProductDialog></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                {/* <ul className="list">
                    <li>
                        <span>Name</span>
                        <span>Amount</span>
                        <span></span>
                    </li>
                   )
                    }

                </ul> */}

                <DialogProvider>
                    <CreateProductDialog>
                        <button className="add">add product</button>
                    </CreateProductDialog>
                </DialogProvider>
            </div>

        </div>
    )
}