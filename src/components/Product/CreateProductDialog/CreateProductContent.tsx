import { useForm } from "react-hook-form"
import { CreateProductRequestDto } from "../../../services/Querys/Product/ProductDto"
import { UseMutateFunction } from "react-query"

import './CreateProductContent.css'

export type myprop = {
    status: "idle" | "loading" | "success" | "error",
    mutate: UseMutateFunction<void, unknown, CreateProductRequestDto, unknown>
}

export function CreateProductContent({ mutate, status }: myprop) {
    const { register, handleSubmit } = useForm()

    function createProduct(data: any) {
        mutate({
            name: data.name
        })
    }

    return (<>
        {status == "idle"
            ? <form onSubmit={handleSubmit(createProduct)}>
                <div className='section-input'>
                    <label htmlFor="name">Nome do produto: </label>
                    <input type="text" id="name" {...register('name')} />
                </div>

                <button className="btnModal" type='submit'>Confirmar</button>
            </form>
            : <>
                {status === "loading" && <span>loading</span>}
                {status === "success" && <span>sucesso</span>}
                {status === "error" && <span>erro</span>}
            </>
        }
    </>)
}