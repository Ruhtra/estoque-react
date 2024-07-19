
// import { useCreateProduct } from '../../../services/Querys/Product/Product';
// import { useForm } from 'react-hook-form';
    // const { mutate, error: _error, status } = useCreateProduct()
    // const { register, handleSubmit } = useForm()
    // function createProduct(data: any) {
    //     mutate({
    //         name: data.name
    //     })
    // }
import { ReactNode, useEffect, useState } from 'react';
import { useCreateProduct } from '../../../services/Querys/Product/Product';
import './CreateProductDialog.css'
import * as Dialog from '@radix-ui/react-dialog';
import { CreateProductContent } from './CreateProductContent';
import { Cross1Icon } from '@radix-ui/react-icons';

export type CreateProductDialogProps = {
    children: ReactNode
}
  
export function CreateProductDialog({ children }: CreateProductDialogProps) {
    const [openDialog, setopenDialog] = useState(false);
    const { mutate, status, reset } = useCreateProduct()

    useEffect(() => {
        if (openDialog == false)
            reset()
    }, [openDialog]);

    useEffect(() => {
        if (status == 'success') setopenDialog(false)
    }, [status])


    return (
        <Dialog.Root open={openDialog} onOpenChange={setopenDialog}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className='DialogTitle'>
                        <div className="text">Create Product</div>
                        <Dialog.Close asChild>
                            <Cross1Icon className='icon' width={'100%'} height={'100%'} />
                        </Dialog.Close>
                    </Dialog.Title>
                    <CreateProductContent mutate={mutate} status={status} />
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