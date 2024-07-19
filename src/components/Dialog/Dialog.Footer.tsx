import { ReactNode } from "react"

export type DialogFooterProps = {
    children: ReactNode
}

export function DialogFooter({ children }: DialogFooterProps) {
    return (
        <div className="DialogFooter">
            {children}
        </div>
    )
}