import { useForm } from "react-hook-form"
import { CreateProductRequestDto } from "../../../services/Querys/Product/ProductDto"
import { UseMutateFunction } from "react-query"
import { useContext, useEffect } from "react"
import { DialogContext } from "../../Dialog/DialogContext"

export type myprop = {
    formRef: React.RefObject<HTMLFormElement>,
    status: "idle" | "loading" | "success" | "error",
    mutate: UseMutateFunction<void, unknown, CreateProductRequestDto, unknown>
}

export function CreateProductContent({ formRef, mutate, status }: myprop) {
    const { setOpenDialog } = useContext(DialogContext);
    const { register, handleSubmit } = useForm()

    function createProduct(data: any) {
        mutate({
            name: data.name
        })
    }

    useEffect(() => {
        if (status == 'success') setOpenDialog(false)
    }, [status])

    return (<>
        <form ref={formRef} onSubmit={handleSubmit(createProduct)}>
            <div className="section">
                <label htmlFor="nameInput">Nome: </label>
                <input type="text" id="nameInput" {...register('name')} />
            </div>
            <div className="section">
                <label htmlFor="">Medida: </label>
                <input type="text" />
            </div>
            <input type="submit" value="" hidden />
        </form>



        {/* {status == "idle"
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
        } */}
    </>)
}