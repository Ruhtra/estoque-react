import { ReactNode, useRef } from 'react';
import { useDecreaseStock } from '../../../services/Querys/Stock/Stock';
import { Dialog } from '../../UI/Dialog';
import { useForm } from 'react-hook-form';
import { Form } from '../../UI/Form';
export type DecreaseStockDialogProps = {
    children: ReactNode
    id: string
}

export function DecreaseStockDialog({ children, id }: DecreaseStockDialogProps) {
    const { register, handleSubmit } = useForm()
    const { mutate, status } = useDecreaseStock()
    const buttonSubmit = useRef<HTMLButtonElement>(null)

    function increaseStock(data: any) {
        mutate({
            amount: parseFloat(data.amount),
            id: id
        })
    }


    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content status={status} closeSuccess>
                <Dialog.Title title='Decrease Stock' />
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
