import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import queryString from "query-string"

import NavigationItem from "./NavigationItem"

const navigationGroup = [
    { path: "/", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
]

export const Navigation = (): JSX.Element => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname, search } = location

    const queryParams = queryString.parse(search)

    // If the `from404` query parameter is present, redirect to the custom 404 page
    if (queryParams.from404) {
        console.log("Reaching redirect")
        navigate("/404")
    }

    return (
        <nav className="center">
            {navigationGroup.map((navItem) => {
                const { name, path } = navItem
                return (
                    <NavigationItem
                        key={name}
                        path={path}
                        name={name}
                        isSelected={pathname === path}
                        onClick={() => {}}
                    />
                )
            })}
        </nav>
    )
}
