import { ReactNode, useContext, useEffect, useRef } from 'react';
import { useIncreaseStock } from '../../../services/Querys/Stock/Stock';
import { Dialog } from '../../UI/Dialog';
import { useForm } from 'react-hook-form';
import { Form } from '../../UI/Form';
import { DialogContext } from '../../UI/Dialog/DialogContext';
export type IncreaseStockDialogProps = {
    children: ReactNode
    id: string
}

export function IncreaseStockDialog({ children, id }: IncreaseStockDialogProps) {
    const { openDialog } = useContext(DialogContext)
    const { register, handleSubmit, reset: resetInputs } = useForm()
    const { mutate, status, reset } = useIncreaseStock()
    const buttonSubmit = useRef<HTMLButtonElement>(null)

    function increaseStock(data: any) {
        mutate({
            amount: parseFloat(data.amount),
            id: id
        })
    }

    
    /* remover esse código daqui e coloca-lo dentros dos dialgos */
    useEffect(() => {
        if (status == 'success' ) {
            reset()
            resetInputs()
        }
    }, [status])
    useEffect(() => {
        if (openDialog == false) reset()
    }, [openDialog])


    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content status={status} closeSuccess>
                <Dialog.Title title='Increase Stock' />
                <Dialog.Description>
                    <form onSubmit={handleSubmit(increaseStock)}>
                        <Form.Section id="amountInput" label='Amount'>
                            <input type="number" step={0.01} id="amount" {...register('amount')} />
                        </Form.Section>

                        <button ref={buttonSubmit} style={{display: 'none'}} type='submit'></button>
                    </form>
                </Dialog.Description>
                <Dialog.Footer>
                    <Dialog.Confirm value='Increase' onClick={() => buttonSubmit.current?.click()} />
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    )
}
