import { projects } from "../../assets/data.json";
import type { ReactElement } from "react";
import "./ProjectList.css";

type ProjectListProps = {
    className? : string
};

type Project = {
    title        : string, 
    link         : string, 
    description? : string,
    image?       : string
};

function ProjectList({className = ""} : ProjectListProps) : ReactElement {
    const projectList     : Project[]      = projects;
    const projectDisplays : ReactElement[] = projectList.map(ProjectDisplay); 
    return (
        <div className={"project-list " + className}>
            {projectDisplays}
        </div>
    );
}

function ProjectDisplay(project : Project) : ReactElement {
    let image       = project.image ? <img className="project-image" src={project.image} /> 
                                    : <div className="project-image"></div>; 
    let title       = <h2 className="project-title">{project.title}</h2>; 
    let description = project.description ? <p className="project-description">{project.description}</p> 
                                          : <></>;
    return (
        <a href={project.link} className="project-display">
            <div className="project-display-content">
                {/* {image} */}
                {title}
                {description}
            </div>
        </a>
    );
}

export default ProjectList; 