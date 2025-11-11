import "./ExperienceTab.css";
import { experiences } from "../../assets/data.json";
import type { ReactElement } from "react";
import SkillsList from "../SkillsList/SkillsList";

type ExperienceTabProps = {
    className? : string
}; 

type WorkExperience = {
    title   : string, 
    company : string, 
    summary : string[], 
    skills? : string[] 
};

const experienceList : WorkExperience[] = experiences;

function ExperienceTab({className = ""} : ExperienceTabProps) : ReactElement {
    const experienceElements : ReactElement[] = experienceList.map(makeExperienceElement); 
    return (
        <div className={"work-experience-tab " + className}>
            {experienceElements}
        </div>
    );
}

function makeExperienceElement({title, company, summary, skills = []} : WorkExperience) : ReactElement {
    const titleElement   : ReactElement = <h3 className="work-experience-title">{title}</h3>;
    const companyElement : ReactElement = <h4 className="work-experience-company">{company}</h4>; 
    const skillsElement  : ReactElement = <SkillsList className="work-experience-skills" skills={skills}/>;
    
    const summaryBullets : ReactElement[] = summary.map((bullet : string) => <li className="work-experience-summary-bullet">{bullet}</li>);
    const summaryElement : ReactElement   = <ul className="work-experience-summary">{summaryBullets}</ul>;

    return (
        <div className="work-experience">
            {titleElement}
            {companyElement}
            {summaryElement}
            {skillsElement}
        </div>
    );
}

export default ExperienceTab;