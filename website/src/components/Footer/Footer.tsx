import type { ReactElement } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

type FooterProps = {
    className? : string; 
};


function Footer({className = ""} : FooterProps) : ReactElement {
    
    const githubLink    : ReactElement  = <a className="footer-github-link   footer-link-icon" href="https://github.com/richmanpoorman"><FaGithub /></a>
    const linkedinLink  : ReactElement  = <a className="footer-linkedin-link footer-link-icon" href="https://www.linkedin.com/in/matthewkw/"><FaLinkedin /></a> // TODO : Replace with icons
    return (
        <div className={"website-footer " + className}>
            <div className="footer-icons">
                {githubLink}
                {linkedinLink}
            </div>
        </div>
    );

}

export default Footer; 