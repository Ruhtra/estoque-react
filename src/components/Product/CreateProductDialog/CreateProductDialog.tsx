// import { useCreateProduct } from '../../../services/Querys/Product/Product';
// import { useForm } from 'react-hook-form';
    // const { mutate, error: _error, status } = useCreateProduct()
    // const { register, handleSubmit } = useForm()
    // function createProduct(data: any) {
    //     mutate({
    //         name: data.name
    //     })
    // }
import { ReactNode } from 'react';
import { Dialog } from '../../Dialog';
import './CreateProductDialog.css'

export type CreateProductDialogProps = {
    children: ReactNode
}

export function CreateProductDialog({ }: CreateProductDialogProps) {

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <button>Open</button>
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Title title='um titulo'/>
                    <Dialog.Description>
                        conteudo
                    </Dialog.Description>
                    <Dialog.Footer>
                        <button type='submit'>Confirmar</button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Root>
        </>
    )
}
                        // {status == "idle"
                        //     ? <form onSubmit={handleSubmit(createProduct)}>
                        //         <div className='section_input'>
                        //             <label htmlFor="name">Nome do produto: </label>
                        //             <input type="text" id="name" {...register('name')} />
                        //         </div>

                        //     </form>
                        //     : <>
                        //         {status === "loading" && <span>loading</span>}
                        //         {status === "success" && <span>sucesso</span>}
                        //         {status === "error" && <span>erro</span>}
                        //     </>
                        // }