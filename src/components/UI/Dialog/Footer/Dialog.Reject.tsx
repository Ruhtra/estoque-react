export type DialogRejectProps = {
    value: string,
    onClick?: () => void
}

export function DialogReject({value, onClick}: DialogRejectProps) {
    return (<>
    
    <button onClick={onClick} className='cancel'>{value}</button>
    </>)
}