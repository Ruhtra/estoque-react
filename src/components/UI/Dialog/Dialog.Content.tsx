import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useContext, useEffect } from "react"
import { Loading } from "../Loading/Loading";
import { DialogContext } from "./DialogContext";

export type DialogContentProps = {
    children: ReactNode
    status?: "loading" | "error" | "idle" | "success"
    closeSuccess?: boolean
}

export function DialogContent({ status, closeSuccess, children }: DialogContentProps) {
    const { setOpenDialog } = useContext(DialogContext)

    if (closeSuccess)  useEffect(() => {
        if (status == 'success') setOpenDialog(false)
    }, [status])

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content autoFocus={false} className="DialogContent">
                {status == "loading" && <Loading></Loading>}
                {status == "error" && <h3>Eror ao carregar contate o suporte</h3>}
                {(status == null || status == "idle") && <>
                    {children}
                    <Dialog.Description />
                </>}
            </Dialog.Content>
        </Dialog.Portal>
    )
}