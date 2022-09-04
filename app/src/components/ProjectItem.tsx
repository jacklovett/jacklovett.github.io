import React from "react"
import { Project } from "./../views/Projects"

interface Props {
    project: Project
}

export const ProjectItem = (props: Props) => {
    const { project } = props
    const { name, link, status, imagePath } = project
    return (
        <div className="project-details">
            <img src={imagePath} alt={name} />
            <h3>{name}</h3>
            <a href={link} target="_blank" rel="noreferrer">
                GitHub repo
            </a>
            <p>{`Status: ${status}`}</p>
        </div>
    )
}
