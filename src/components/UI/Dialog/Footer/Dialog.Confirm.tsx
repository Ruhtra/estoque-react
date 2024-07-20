export type DialogConfirmProps = {
    value: string,
    onClick?: () => void
}

export function DialogConfirm({value, onClick}: DialogConfirmProps) {
    return (<>
        <button onClick={onClick} className='confirm'>{value}</button>
    </>)
}