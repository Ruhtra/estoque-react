import { useGetAllHistory } from '../../services/Querys/History/History'
import './HistoryRoute.css'

export function HistoryRoute () {
    const { data, status} = useGetAllHistory()

    return (<>

        {status == 'loading' && <h2>loading</h2>}
        {

            data?.map(e => {
                return <span>{JSON.stringify(e)}</span>
            })
        }

        Historico
    </>)
}