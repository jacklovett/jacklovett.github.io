import React from "react"

interface Props {
    icon: string
    link: string
    size?: string
}

export const IconLink = (props: Props) => {
    const { icon, link, size = "medium" } = props
    return (
        <a
            className={`icons ${size}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={`fa fa-${icon}`}></i>
        </a>
    )
}
