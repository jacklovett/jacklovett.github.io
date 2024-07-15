import React from "react"
import { ProjectItem } from "../components/ProjectItem"

export interface Project {
    name: string
    description: string
    link: string
    status: "Maintained" | "Archived" | "In Progress"
    imagePath: string
}

const projectData: Project[] = [
    {
        name: "Tic-Stat-Toe",
        description: "Tic-tac-toe game with a statistics tracker",
        link: "https://github.com/jacklovett/Tic-Stat-Toe",
        status: "Archived",
        imagePath: "",
    },
    {
        name: "Samaritans Chat",
        description:
            "Anonymous chat application for the Samaritan charities. Aiming to connect people in need while protecting participants identity.",
        link: "https://github.com/jacklovett/SamaritansChat",
        status: "Archived",
        imagePath: "",
    },
]

export const Projects = () => {
    return (
        <div className="projects-view">
            <div className="projects-container">
                <div className="projects">
                    {projectData.map((project: Project) => (
                        <ProjectItem key={project.name} project={project} />
                    ))}
                </div>
            </div>
            <p className="repo">
                More of my project ideas can be found on my{" "}
                <a
                    href="https://github.com/jacklovett?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </p>
        </div>
    )
}
