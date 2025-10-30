import type { ReactElement } from "react";
import { education } from "../../assets/data.json";
import TabsList from "../Tabs/TabsList";
import Tab from "../Tabs/Tab";
import TabGroup from "../Tabs/TabGroup";

type CourseData = {
    name        : string, 
    description : string, 
    code?       : string, 
    grade?      : string 
};

type SemesterData = {
    semester : string, 
    courses  : CourseData[]
}

type TranscriptData = {
    school    : string, 
    semesters : SemesterData[]
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

function makeTranscriptTab({school, semesters} : TranscriptData) : ReactElement {
    const semestersTab : ReactElement[] = semesters.map(makeSemestersTab);
    return (
        <Tab tabName={school}>
            <h2>{school}</h2>
            <TabsList className="courses-course-data">
                {semestersTab}
            </TabsList>
        </Tab>
    );
}

function makeSemestersTab({semester, courses} : SemesterData) : ReactElement {
    const coursesElements : ReactElement[] = courses.map(makeCourseTab); 
    return (
        <TabGroup groupName={semester}>
            {coursesElements}
        </TabGroup>
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