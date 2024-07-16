import React from "react"
import { Project } from "./../views/Projects"
import { IconLink } from "./IconLink"

interface Props {
    project: Project
}

export const ProjectItem = (props: Props) => {
    const { project } = props
    const { name, description, link, status } = project
    return (
        <div className="project-details">
            <p className="project-title">{name}</p>
            <p className="project-description">{description}</p>
            <p className="project-status">{`Status: ${status}`}</p>
            <div className="repo-container">
                <IconLink icon="github" link={link} />
            </div>
        </div>
    )
}
