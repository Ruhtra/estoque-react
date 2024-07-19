import { ReactNode, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useDeleteProduct } from '../../../services/Querys/Product/Product';
import { GetAllProductResponseDto } from '../../../services/Querys/Product/ProductDto';
import { IncreaseStockDialog } from '../IncreaseStockDialog/IncrieaseStockDialog';
import { Cross1Icon } from '@radix-ui/react-icons';

export type OpenProductDialogProps = {
    children: ReactNode;
    product: GetAllProductResponseDto;
};

export function OpenProductDialog({ product, children }: OpenProductDialogProps) {
    const [openDialog, setopenDialog] = useState(false);

    const { mutate, status } = useDeleteProduct();

    function deleteProduct(id: string) {
        mutate({ id });
    }

    useEffect(() => {
        if (status == 'success') setopenDialog(false)
    }, [status]);

    return (
        <Dialog.Root open={openDialog} onOpenChange={setopenDialog}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent" >
                    <Dialog.Title className='DialogTitle'>
                        <div className="text">Details Product</div>
                        <Dialog.Close asChild>
                            <Cross1Icon className='icon' width={'100%'} height={'100%'} />
                        </Dialog.Close>
                    </Dialog.Title>
                    <div className='description'>
                        {status === "idle" ? (
                            <>
                                <div className="info">
                                    nome: {product.name} <br />
                                    amount: {product.stock.amount}
                                </div>
                              

                                <div className='options'>
                                    <IncreaseStockDialog id={product.stock.id}>
                                        <button>increase stock</button>

                                    </IncreaseStockDialog>
                                    <button className='delete' onClick={() => deleteProduct(product.id)}>Delete</button>
                                </div>
                            </>
                        ) : (
                            <>
                                {status === "loading" && <span>Carregando...</span>}
                                {status === "error" && <span>Erro ao excluir o produto.</span>}
                                {/* {status === "success" && <span>Produto excluído com sucesso.</span>} */}
                            </>
                        )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
