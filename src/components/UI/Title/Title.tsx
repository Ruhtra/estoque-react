import './Title.css'

export type TitleProps = {
    title: string
}

export function Title({ title }: TitleProps) {
    return (
        <div className="titleComponent">
            <div className="block">
                <h2>{title}</h2>
            </div>
        </div>
    )
}