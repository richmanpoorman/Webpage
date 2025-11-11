import type { ReactElement } from "react";
import "./SkillsList.css";
import { skillCategory } from "../../assets/data.json"

type SkillsListProps = {
    className? : string, 
    skills     : string[]
};

const skillMapping : Record<string, string> = skillCategory;

function SkillsList({className = "", skills} : SkillsListProps) : ReactElement {
    const skillElements : ReactElement[] = skills.map(makeSkillElement); 
    return (
        <div className={"skill-list " + className}>
            {skillElements}
        </div>
    )
}

function makeSkillElement(skill : string) : ReactElement {
    
    const skillTag : string = " " + (skill.toLowerCase() in skillMapping ? skillMapping[skill.toLowerCase()] : "default-skill");
    return (
        <div className={"skill" + skillTag}>
            {skill}
        </div>
    );
}

export default SkillsList;