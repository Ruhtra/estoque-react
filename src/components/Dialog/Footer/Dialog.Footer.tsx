import { ReactNode } from "react"
import './Dialog.Footer.css'

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