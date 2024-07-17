import { useForm } from "react-hook-form"
import { UseMutateFunction } from "react-query"
import { IncreaseStockRequestDto } from "../../../services/Querys/Stock/StockDto"

export type myprop = {
    status: "idle" | "loading" | "success" | "error",
    mutate: UseMutateFunction<void, unknown, IncreaseStockRequestDto, unknown>
    id: string
}

export function IncreaseStockContent({ mutate, status , id}: myprop) {
    const { register, handleSubmit } = useForm()

    function increaseStock(data: any) {
        mutate({
            amount: parseFloat(data.amount),
            price: parseFloat(data.price),
            id: id
        })
    }

    return (<>
        {status == "idle"
            ? <form onSubmit={handleSubmit(increaseStock)}>
                <div className='section_input'>
                    <label htmlFor="amount">Quantidade comprada: </label>
                    <input type="number" step={0.01} id="amount" {...register('amount')} />
                </div>

                <div className='section_input'>
                    <label htmlFor="price">Preço total: </label>
                    <input type="number" step={0.01} id="price" {...register('price')} />
                </div>

                <button type='submit'>Confirmar</button>
            </form>
            : <>
                {status === "loading" && <span>loading</span>}
                {status === "success" && <span>sucesso</span>}
                {status === "error" && <span>erro</span>}
            </>
        }
    </>)
}