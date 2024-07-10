import { Loading } from "../components/Loading/Loading"
import { useCreateProduct, useGetAllProduct } from "../services/Querys/Product/Product"

export function Products() {
    const { data: products, status: productsStatus } = useGetAllProduct()

    const { mutate, error } = useCreateProduct()

    if (productsStatus == "loading")  return <Loading />
    if (productsStatus == "error") return <h2>Houve um erro ao carregar produtos</h2> 

  

    function added () {
        mutate({
            name: "onion",
            price: 3.2
        })
    }

    return (
        <>
            {
                products?.map(p => {
                    return <p key={p.id}>{JSON.stringify(p)}</p>
                })
            }

            <button onClick={added}>added onion</button>


        </>
    )
}