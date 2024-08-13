import React, { ReactNode } from "react"

interface IProps {
    path: string
    children: ReactNode
    ariaLabel?: string
}

export const Link = (props: IProps) => {
    const { path, children, ariaLabel } = props
    return (
        <a
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
        >
            {children}
        </a>
    )
}
