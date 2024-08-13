import React from "react"
import { NavLink } from "react-router-dom"

interface Props {
    path: string
    name: string
    isSelected: boolean
    onClick: () => void
}

const NavigationItem = (props: Props) => {
    const { path, name, isSelected, onClick } = props

    return (
        <div
            className={
                isSelected ? "center nav-item selected" : "center nav-item"
            }
        >
            <NavLink to={path} onClick={onClick}>
                {name}
            </NavLink>
        </div>
    )
}

export default NavigationItem
