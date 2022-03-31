import { aboutMeDescription, myName } from "./Utilities";

export const About = () => {
    return (
        <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h1>I'm {myName}</h1>
            <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
            <br></br>
            <p>{aboutMeDescription}</p>
        </div>
    );
}