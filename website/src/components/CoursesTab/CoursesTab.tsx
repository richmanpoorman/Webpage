import type { ReactElement } from "react";
import { education } from "../../assets/data.json";
import TabsList from "../Tabs/TabsList";
import Tab from "../Tabs/Tab";

type CourseData = {
    name        : string, 
    description : string, 
    code?       : string, 
    grade?      : string 
};

type TranscriptData = {
    school  : string, 
    courses : CourseData[]
}; 

type CoursesTabProps = {
    className? : string
}; 

const educationList : TranscriptData[] = education; 

function CoursesTab({className = ""} : CoursesTabProps) : ReactElement {
    const transcriptsTabs : ReactElement[] = educationList.map(makeTranscriptTab);
    return (
        <div className={"courses-tab-list " + className}>
            <TabsList className="courses-transcripts">
                {transcriptsTabs}
            </TabsList>
        </div>
    );
}

function makeTranscriptTab({school, courses} : TranscriptData) : ReactElement {
    const coursesTabs : ReactElement[] = courses.map(makeCourseTab);
    return (
        <Tab tabName={school}>
            <h2>{school}</h2>
            <TabsList className="courses-course-data">
                {coursesTabs}
            </TabsList>
        </Tab>
    );
}

function makeCourseTab({name, description, code, grade} : CourseData) : ReactElement {
    const classCodeElement : ReactElement = code  ? <p className="courses-course-code">Class Code: {code}</p> : <></>;
    const gradeElement     : ReactElement = grade ? <p className="courses-course-grade">Grade: {grade}</p>    : <></>;
    return (
        <Tab tabName={name}>
            <h3 className="courses-course-name">{name}</h3>
            {classCodeElement}
            <p className="courses-course-description">{description}</p>
            {gradeElement}
        </Tab>
    ); 
}

export default CoursesTab; 