import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export type DialogTitleProps = {
    // children: ReactNode,
    title: string
}

export function DialogTitle({ title }: DialogTitleProps) {
    return (
        <>
            <Dialog.Title className="DialogTitle">
                <div className="title">
                    {title}
                </div>
                <Dialog.Close asChild>
                    <Cross2Icon width={'100%'} height={'100%'} className="close" />
                </Dialog.Close>
            </Dialog.Title>
        </>
    )
}