import { Loading } from '../../components/UI/Loading/Loading'
import { Page } from '../../components/UI/Route/Page'
import { Route } from '../../components/UI/Route/Route'
import { Title } from '../../components/UI/Title/Title'
import { useGetAllHistory } from '../../services/Querys/History/History'

export function HistoryRoute() {
    const { data, status } = useGetAllHistory()

    if (status == "loading") return <Loading />
    if (status == "error") return <h2>Houve um erro ao carregar produtos</h2>

    return (
        <Route>
            <Title title='History' />
            <Page>
                <div className="tabela">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Created</td>
                                <td>operation</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map(p => {
                                    let date = new Date(p.createdAt)
                                    return <tr key={p.id}>
                                        <td>{p.product.name}</td>
                                        <td>{p.price}</td>
                                        <td>{date.toLocaleDateString()}</td>
                                        <td>{p.operation}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Page>
        </Route>
    )
}