
import { useCreateProduct } from '../../../services/Querys/Product/Product';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Dialog } from "../../Dialog";
import { DialogContext } from '../../Dialog/DialogContext';
import { useForm } from 'react-hook-form';

export type CreateProductDialogProps = {
    children: ReactNode
}



export function CreateProductDialog({ children }: CreateProductDialogProps) {
    const { openDialog, setOpenDialog } = useContext(DialogContext)

    const { register, handleSubmit } = useForm()
    const buttonSubmit = useRef<HTMLButtonElement>(null)
    const { mutate, status, reset } = useCreateProduct()

    function createProduct(data: any) {
        mutate({
            name: data.name
        })
    }


    

    useEffect(() => {
        if (openDialog == false) reset() 
    }, [openDialog])


    useEffect(() => {
        if (status == 'success') setOpenDialog(false)
    }, [status])


    return (
            <Dialog.Root>
                <Dialog.Trigger>
                    {children}
                </Dialog.Trigger>
                <Dialog.Content>
                    <Dialog.Title title='Criar Produto' />
                    <Dialog.Description>
                        <form onSubmit={handleSubmit(createProduct)}>
                            <div className="section">
                                <label htmlFor="nameInput">Nome: </label>
                                <input type="text" id="nameInput" {...register('name')} />
                            </div>
                            <div className="section">
                                <label htmlFor="">Medida: </label>
                                <input type="text" />
                            </div>

                            <button ref={buttonSubmit} style={{display: 'none'}} type='submit'>submit</button>
                        </form>
                    </Dialog.Description>
                    <Dialog.Footer>
                        <button onClick={() => setOpenDialog(false)} className='cancel'>Cancelar</button>
                        <button onClick={()=> buttonSubmit.current?.click()} className='confirm'>Concluido</button>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Root>
    )
}




