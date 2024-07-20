
import { useCreateProduct } from '../../../services/Querys/Product/Product';
import { ReactNode, useContext, useRef } from 'react';
import { Dialog } from "../../UI/Dialog";
import { DialogContext } from '../../UI/Dialog/DialogContext';
import { useForm } from 'react-hook-form';
import { Form } from '../../UI/Form';

export type CreateProductDialogProps = {
    children: ReactNode
}



export function CreateProductDialog({ children }: CreateProductDialogProps) {
    const { setOpenDialog } = useContext(DialogContext)

    const { register, handleSubmit } = useForm()
    const buttonSubmit = useRef<HTMLButtonElement>(null)
    const { mutate, status } = useCreateProduct()

    function createProduct(data: any) {
        mutate({
            name: data.name
        })
        console.log(data.unit);
        
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content status={status} closeSuccess>
                    <Dialog.Title title='Criar Produto' />
                    <Dialog.Description>
                        <form onSubmit={handleSubmit(createProduct)}>
                            <Form.Section id='nameInput' label='Nome'>
                                <Form.Input.Text id='nameInput' register={register} name="name" />
                            </Form.Section>
                            <Form.Section id='unitInput' label='Medida'>
                                <Form.Input.Select id='unitInput' register={register} name='unit'>
                                    <option value={`kg`}>KG</option>
                                    <option value={`un`}>UN</option>
                                </Form.Input.Select>
                            </Form.Section>

                            <button ref={buttonSubmit} style={{ display: 'none' }} type='submit'>submit</button>
                        </form>
                    </Dialog.Description>
                    <Dialog.Footer>
                        <Dialog.Reject value="Cancelar" onClick={() => setOpenDialog(false)} />
                        <Dialog.Confirm value="Concluido" onClick={() => buttonSubmit.current?.click()} />
                    </Dialog.Footer>

            </Dialog.Content>
        </Dialog.Root>
    )
}