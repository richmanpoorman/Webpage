import { projects } from "../../assets/data.json";
import type { ReactElement } from "react";
import "./ProjectList.css";
import SkillsList from "../SkillsList/SkillsList";

type ProjectListProps = {
    className? : string
};

type Project = {
    title        : string, 
    link?        : string, 
    description? : string,
    image?       : string,
    skills?      : string[]
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
                                    : <></>; 
    let title       = <h2 className="project-title">{project.title}</h2>; 
    let description = project.description ? <p className="project-description">{project.description}</p> 
                                          : <></>;
    let link        = project.link   ? <a className="project-link" href={project.link} >See Project</a> : <></>;
    let skillList   = project.skills ? <SkillsList className="project-skill-list" skills={project.skills}/> : <></>
    return (
        <div className="project-display">
            {title}
            {description}
            {image}
            {skillList}
            {link}
        </div>
        
    );
}

export default ProjectList; 