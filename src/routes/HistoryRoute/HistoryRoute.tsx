import { Title } from '../../components/Title/Title'
import { useGetAllHistory } from '../../services/Querys/History/History'
import './HistoryRoute.css'

export function HistoryRoute() {
    const { data, status } = useGetAllHistory()

    return (
        
        <div className="HistoryRoute">
            <Title title='History' />
            {status == 'loading' && <h2>loading</h2>}

            <ul className="historico">
                <li>
                    <span>Name</span>
                    <span>amount</span>
                    <span>price</span>
                    <span>Operation</span>
                </li>
                {
                    data?.map(e => {
                        return <li key={e.id}>
                            <span>{e.product.name}</span>
                            <span>{e.amount}</span>
                            <span>{e.price}</span>
                            <span>{e.operation}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}