import React from "react"
import { useLocation } from "react-router-dom"

import NavigationItem from "./NavigationItem"

const navigationGroup = [
    { path: "/", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
]

export const Navigation = () => {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <nav className="center">
            {navigationGroup.map((navItem) => {
                const { name, path } = navItem
                return (
                    <NavigationItem
                        key={name}
                        path={path}
                        name={name}
                        isSelected={currentPath === path}
                        onClick={() => {}}
                    />
                )
            })}
        </nav>
    )
}
