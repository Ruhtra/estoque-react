import { FieldValues, UseFormRegister } from "react-hook-form"

export type FormInputTextProps = {
    id: string
    register: UseFormRegister<FieldValues>,
    name: string
}

export function FormInputText({ id, register, name }: FormInputTextProps) {
    return (
        <input type="text" id={id} {...register(name)} />
    )
}