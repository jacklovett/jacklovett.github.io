import { useNavigate, useLocation } from "react-router-dom"
import queryString from "query-string"

import NavigationItem from "./NavigationItem"
import { useEffect } from "react"

const navigationGroup = [
    { path: "/", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
]

export const Navigation = (): JSX.Element => {
    const navigate = useNavigate()
    const { pathname, search } = useLocation()

    const queryParams = queryString.parse(search)

    // If the `from404` query parameter is present, navigate to the custom 404 page
    useEffect(() => {
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
