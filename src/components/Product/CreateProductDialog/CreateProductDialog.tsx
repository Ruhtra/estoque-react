import { ReactNode, useEffect, useState } from 'react';
import { useCreateProduct } from '../../../services/Querys/Product/Product';
import './CreateProductDialog.css'
import * as Dialog from '@radix-ui/react-dialog';
import { CreateProductContent } from './CreateProductContent';

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
                    <Dialog.Title>Create Product</Dialog.Title>
                    <CreateProductContent mutate={mutate} status={status} />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}