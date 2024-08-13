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

    // If the `from404` query parameter is present, navigate to the custom 404 page
    React.useEffect(() => {
        if (queryParams.from404) {
            navigate("/404", { replace: true })
        }
    }, [queryParams.from404, navigate])

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
