import { ReactNode, useContext } from "react"
import { Dialog } from "../../UI/Dialog"
import { DialogContext } from "../../UI/Dialog/DialogContext"

export type DialogConfirmationProps = {
    message: string
    confirm: string
    reject: string
    fnConfirm: () => void
    children: ReactNode
}

export function DialogConfirmation({ message, confirm, reject, fnConfirm, children }: DialogConfirmationProps) {
    const { setOpenDialog } = useContext(DialogContext)

    return (<Dialog.Root>
        <Dialog.Trigger>
            {children}
        </Dialog.Trigger>
        <Dialog.Content >
            <Dialog.Title title='Confirmation' />
            <Dialog.Description>
                {message}
            </Dialog.Description>
            <Dialog.Footer>
                <Dialog.Reject value={reject} onClick={() => setOpenDialog(false)} />
                <Dialog.Confirm value={confirm} onClick={() => { fnConfirm(); setOpenDialog(false)}} />
            </Dialog.Footer>
        </Dialog.Content>
    </Dialog.Root>)
}