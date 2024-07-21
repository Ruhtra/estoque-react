import { ReactNode, useContext, useEffect } from 'react';
import { useDeleteProduct } from '../../../services/Querys/Product/Product';
import { GetAllProductResponseDto } from '../../../services/Querys/Product/ProductDto';
import { IncreaseStockDialog } from './IncrieaseStockDialog';
import { Dialog } from '../../UI/Dialog';
import { DialogContext, DialogProvider } from '../../UI/Dialog/DialogContext';
import { DecreaseStockDialog } from './DecreaseStockDialog';

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
                        Amount: {product.stock.amount}
                    </div>
                    <div className='options'>
                        <DialogProvider>
                            <IncreaseStockDialog id={product.stock.id}>
                                <button className='btnincrease'>Increase stock</button>
                            </IncreaseStockDialog>
                        </DialogProvider>
                        <DialogProvider>
                            <DecreaseStockDialog id={product.stock.id}>
                                <button className='btnDecrease'>Decrease stock</button>
                            </DecreaseStockDialog>
                        </DialogProvider>
                        <DialogProvider>
                            <Dialog.Confirmation
                                message='Do you want to delete this product?'
                                confirm='Yes'
                                reject='No'
                                fnConfirm={() => deleteProduct(product.id)}
                            >
                                <button className='delete btnDelete'>Delete</button>
                            </Dialog.Confirmation>
                        </DialogProvider>
                    </div>
                </Dialog.Description>
                <Dialog.Footer>
                    <Dialog.Confirm value='Ok' onClick={() => setOpenDialog(false)} />
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    );
}