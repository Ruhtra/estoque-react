import { ReactNode } from "react"
import './Form.Section.css'

export type FormSectionProps = {
    children: ReactNode
    id: string
    label: string
}

export function FormSection({ id, label, children }: FormSectionProps) {
    return (<>
        <div className="section">
            <label htmlFor={id}>{label}: </label>
            {children}
        </div>
</>)
}