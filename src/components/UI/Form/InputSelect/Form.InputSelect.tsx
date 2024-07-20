import { ReactNode } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

export type FormInputSelectProps = {
    id: string
    register: UseFormRegister<FieldValues>,
    name: string
    children: ReactNode
}

export function FormInputSelect({ id, register, name, children }: FormInputSelectProps) {
    return (
        <select id={id} {...register(name)}>
            {children}
        </select>
    )
    
}