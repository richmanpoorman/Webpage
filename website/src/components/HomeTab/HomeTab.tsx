import type { ReactElement } from "react";
import { about } from "../../assets/data.json";
import "./HomeTab.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

type AboutData = {
    photo? : string, 
    description : string[]
}

type HomeTabProps = {
    className? : string
};

type HomeLinkIconsProps = {
    className? : string
};

const { photo, description } : AboutData = about;

function HomeTab({className = ""} : HomeTabProps) : ReactElement {
    const imageElement     : ReactElement = photo ? <img className="home-photo" src={photo}/> : <></>;
    const descriptionLines : ReactElement = <div className="home-description">{description.map(renderLine)}</div>;
    const linkIcons        : ReactElement = <HomeLinkIcons className="home-link-icons"/>;
    return (
        <div className={"home-tab " + className}>
            {imageElement}
            <div className="home-content">
                {descriptionLines}
                {linkIcons}
            </div>
        </div>
    );
}

function renderLine(singleDescriptionLine : string) : ReactElement {
    return <p className="home-description-paragraph">{singleDescriptionLine}</p>;
}

function HomeLinkIcons({className = ""} : HomeLinkIconsProps) : ReactElement {
    
    const githubLink    : ReactElement = <a className="home-github-link   home-link-icon" href="https://github.com/richmanpoorman"><FaGithub /></a>
    const linkedinLink  : ReactElement = <a className="home-linkedin-link home-link-icon" href="https://www.linkedin.com/in/matthewkw/"><FaLinkedin /></a> 
    const emailLink     : ReactElement = <a className="home-linkedin-link home-link-icon" href="mailto:matthewkw123@gmail.com"><IoIosMail /></a> 
    return (
        <div className={"home-link-icons " + className}>
            {githubLink}
            {linkedinLink}
            {emailLink}
        </div>
    );

}

export default HomeTab;