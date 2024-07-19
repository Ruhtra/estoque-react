import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react"

export type DialogDescriptionProps = {
    children: ReactNode
}

export function DialogDescription({ children }: DialogDescriptionProps) {
    return (
        <Dialog.Description className="DialogDescription">
            {children}
        </Dialog.Description>
    )
}