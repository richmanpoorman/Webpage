import type { ReactElement } from "react";
import { about } from "../../assets/data.json";

type AboutData = {
    photo? : string, 
    description : string
}

type HomeTabProps = {
    className? : string
};

const { photo, description } : AboutData = about;

function HomeTab({className = ""} : HomeTabProps) : ReactElement {
    const imageElement : ReactElement = photo ? <img className="home-photo" src={photo}/> : <></>;
    const descriptionElement : ReactElement = <p className="home-description">{description}</p>;
    return (
        <div className={"home-tab " + className}>
            {imageElement}
            {descriptionElement}
        </div>
    );
}

export default HomeTab;