import { ReactNode, useContext } from 'react';
import { useDeleteProduct } from '../../../services/Querys/Product/Product';
import { GetAllProductResponseDto } from '../../../services/Querys/Product/ProductDto';
import { IncreaseStockDialog } from './IncrieaseStockDialog';
import { Dialog } from '../../UI/Dialog';
import { DialogContext, DialogProvider } from '../../UI/Dialog/DialogContext';

export type OpenProductDialogProps = {
    children: ReactNode;
    product: GetAllProductResponseDto;
};

export function OpenProductDialog({ product, children }: OpenProductDialogProps) {
    const { setOpenDialog } = useContext(DialogContext)

    const { mutate, status } = useDeleteProduct();

    function deleteProduct(id: string) {
        mutate({ id });
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                {children}
            </Dialog.Trigger>
            <Dialog.Content status={status} closeSuccess>
                <Dialog.Title title={product.name} />
                <Dialog.Description>
                    <div className="info">
                        amount: {product.stock.amount}
                    </div>
                    <div className='options'>
                        <DialogProvider>

                            <IncreaseStockDialog id={product.stock.id}>
                                <button>increase stock</button>
                            </IncreaseStockDialog>
                        </DialogProvider>
                        <button className='delete' onClick={() => deleteProduct(product.id)}>Delete</button>
                    </div>
                </Dialog.Description>
                <Dialog.Footer>
                    <Dialog.Confirm value='Ok' onClick={() => setOpenDialog(false)}/>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    );
}