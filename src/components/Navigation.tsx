import React, { useState } from "react"
import NavigationItem from "./NavigationItem"

const navigationGroup = [
    {
        path: "/",
        name: "About",
    },
    {
        path: "/projects",
        name: "Projects",
    },
    {
        path: "/contact",
        name: "Contact",
    },
]

export const Navigation = () => {
    const [selected, setSelected] = useState<string>(navigationGroup[0].name)

    return (
        <nav>
            {navigationGroup.map((navItem) => {
                const { name, path } = navItem
                return (
                    <NavigationItem
                        key={name}
                        path={path}
                        name={name}
                        isSelected={selected === name}
                        onClick={() => setSelected(name)}
                    />
                )
            })}
        </nav>
    )
}
