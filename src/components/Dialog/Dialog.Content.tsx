import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react"

export type DialogContentProps = {
    children: ReactNode
}

export function DialogContent({ children }: DialogContentProps) {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content autoFocus={false} className="DialogContent">
               {children}
               <Dialog.Description />
            </Dialog.Content>
        </Dialog.Portal>
    )
}