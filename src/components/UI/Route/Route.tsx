import { ReactNode } from "react"
import './Route.css'

export type RouteProps = {
    children: ReactNode
}

export function Route({ children }: RouteProps) {
    return (<div className="route">
        {children}
    </div>)
}