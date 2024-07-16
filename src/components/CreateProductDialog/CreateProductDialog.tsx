import { ReactNode } from 'react';
import { useCreateProduct } from '../../services/Querys/Product/Product';
import './CreateProductDialog.css'
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';

export type CreateProductDialogProps = {
    children: ReactNode
}

export function CreateProductDialog({ children }: CreateProductDialogProps) {
    const { mutate, error: _error, status } = useCreateProduct()
    const { register, handleSubmit } = useForm()

    function createProduct(data: any) {
        mutate({
            name: data.name
        })
    }


    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    {status == "idle"
                        ? <form onSubmit={handleSubmit(createProduct)}>
                            <div className='section_input'>
                                <label htmlFor="name">Nome do produto: </label>
                                <input type="text" id="name" {...register('name')} />
                            </div>

                            <button type='submit'>Confirmar</button>
                        </form>
                        :<>
                            {status === "loading" && <span>loading</span>}
                            {status === "success" && <span>sucesso</span>}
                            {status === "error" && <span>erro</span>}
                        </>
                    }
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}