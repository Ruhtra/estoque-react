import { ReactNode } from 'react'
import './Page.css'

export type PageProps = {
    children: ReactNode
}

export function Page({children}: PageProps) {
    return (<div className='page'>
        {children}
    </div>)
}