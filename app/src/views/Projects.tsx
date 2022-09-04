import React from "react"
import { ProjectItem } from "../components/ProjectItem"

export interface Project {
    name: string
    link: string
    status: "done" | "ongoing" | "closed"
    imagePath: string
}

const projectData: Project[] = [
    {
        name: "Tic-Stat-Toe",
        link: "https://github.com/jacklovett/Tic-Stat-Toe",
        status: "done",
        imagePath: "",
    },
    {
        name: "Samaritans Chat",
        link: "https://github.com/jacklovett/SamaritansChat",
        status: "closed",
        imagePath: "",
    },
    {
        name: "Samaritans Chat",
        link: "https://github.com/jacklovett/SamaritansChat",
        status: "closed",
        imagePath: "",
    },
]

export const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="title">Projects</h1>
            <div className="projects">
                {projectData.map((project: Project) => (
                    <ProjectItem project={project} />
                ))}
            </div>
        </div>
    )
}
