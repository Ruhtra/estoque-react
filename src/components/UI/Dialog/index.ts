import { DialogRoot } from "./Dialog.Root";
import { DialogTrigger } from "./Dialog.Triiger";
import { DialogContent } from "./Dialog.Content";
import { DialogFooter } from "./Footer/Dialog.Footer.tsx";
import { DialogDescription } from "./Dialog.Description";
import { DialogTitle } from "./Dialog.Title";
import { DialogConfirm } from "./Footer/Dialog.Confirm.tsx";
import { DialogReject } from "./Footer/Dialog.Reject.tsx";


export const Dialog = {
    Root: DialogRoot,
    Trigger: DialogTrigger,
    Content: DialogContent,
    Description: DialogDescription,
    Title: DialogTitle,
    Footer: DialogFooter,
    Confirm: DialogConfirm,
    Reject: DialogReject
}