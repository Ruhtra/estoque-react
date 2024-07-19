import { ReactNode } from "react"
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export type DialogTitleProps = {
    // children: ReactNode,
    title: string
}

export function DialogTitle({ title }: DialogTitleProps) {
    return (
        <Dialog.Title className="DialogTitle">
            <h3 className="title">
                {title}
            </h3>
            <Dialog.Close asChild>
                <Cross2Icon width={'100%'} height={'100%'} />
            </Dialog.Close>
        </Dialog.Title>
    )
}