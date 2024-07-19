import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import './Dialog.css'

export type DialogRootProps = {
    children: ReactNode
}

export function DialogRoot({ children }: DialogRootProps) {
    return (<>
        <Dialog.Root>
            {children}
        </Dialog.Root>
    </>)

}