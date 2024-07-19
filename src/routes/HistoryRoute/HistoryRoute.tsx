import { Title } from '../../components/Title/Title'
import { useGetAllHistory } from '../../services/Querys/History/History'

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
                    <span>DateTime</span>
                </li>
                {
                    data?.map(e => {
                        let date = new Date(e.createdAt)

                        return <li key={e.id}>
                            <span>{e.product.name}</span>
                            <span>{e.amount}</span>
                            <span>{e.price}</span>
                            <span>{e.operation}</span>
                            <span>{date.toLocaleDateString()}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}