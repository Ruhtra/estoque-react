import { ReactNode, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './OpenProductDialog.css';
import { useDeleteProduct } from '../../../services/Querys/Product/Product';
import { GetAllProductResponseDto } from '../../../services/Querys/Product/ProductDto';
import { IncreaseStockDialog } from '../IncreaseStockDialog/IncrieaseStockDialog';

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
                    <Dialog.Title>Detalhes do Produto</Dialog.Title>
                    <Dialog.Description>
                        {status === "idle" ? (
                            <>
                                <span>{JSON.stringify(product)}</span>


                                <IncreaseStockDialog id={product.stock.id}>
                                    <button>increase stock</button>

                                </IncreaseStockDialog>
                                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            </>
                        ) : (
                            <>
                                {status === "loading" && <span>Carregando...</span>}
                                {status === "error" && <span>Erro ao excluir o produto.</span>}
                                {/* {status === "success" && <span>Produto excluído com sucesso.</span>} */}
                            </>
                        )}
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
