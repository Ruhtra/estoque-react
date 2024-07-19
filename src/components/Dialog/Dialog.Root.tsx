import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useContext } from "react";
import './Dialog.css'
import { DialogContext } from "./DialogContext";

export type DialogRootProps = {
    children: ReactNode
}

export function DialogRoot({ children }: DialogRootProps) {
    const  { openDialog, setOpenDialog } = useContext(DialogContext)

    return (<>
        <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
            {children}
        </Dialog.Root>
    </>)

}