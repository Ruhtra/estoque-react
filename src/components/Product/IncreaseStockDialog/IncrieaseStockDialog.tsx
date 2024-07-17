import { ReactNode, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useIncreaseStock } from '../../../services/Querys/Stock/Stock';
import { IncreaseStockContent } from './IncreaseStockContent';
import { Cross1Icon } from '@radix-ui/react-icons';

export type IncreaseStockDialogProps = {
    children: ReactNode
    id: string
}

// não contém valdiação para errors

export function IncreaseStockDialog({ children, id }: IncreaseStockDialogProps) {
    const [openDialog, setopenDialog] = useState(false);
    const { mutate, status, reset } = useIncreaseStock()

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
                        <div className="text">Increase Stock</div>
                        <Dialog.Close asChild>
                            <Cross1Icon className='icon' width={'100%'} height={'100%'} />
                        </Dialog.Close>
                    </Dialog.Title>
                    <IncreaseStockContent mutate={mutate} status={status} id={id} />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}