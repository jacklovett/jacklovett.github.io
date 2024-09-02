import { Link } from "./Link"

interface Props {
    icon: string
    link: string
    size?: string
    ariaLabel?: string
}

export const IconLink = (props: Props) => {
    const { icon, link, size = "medium", ariaLabel } = props
    return (
        <Link path={link} ariaLabel={ariaLabel}>
            <span className={`icons ${size}`}>
                <i className={`fa fa-${icon}`}></i>
            </span>
        </Link>
    )
}
