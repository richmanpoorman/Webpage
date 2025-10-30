import type { ReactElement } from "react";
import { about } from "../../assets/data.json";

type AboutData = {
    photo? : string, 
    description : string[]
}

type HomeTabProps = {
    className? : string
};

const { photo, description } : AboutData = about;

function HomeTab({className = ""} : HomeTabProps) : ReactElement {
    const imageElement : ReactElement = photo ? <img className="home-photo" src={photo}/> : <></>;
    const descriptionLines : ReactElement[] = description.map(renderLine);
    return (
        <div className={"home-tab " + className}>
            {imageElement}
            {descriptionLines}
        </div>
    );
}

function renderLine(singleDescriptionLine : string) : ReactElement {
    return <p className="home-description">{singleDescriptionLine}</p>;
}

export default HomeTab;