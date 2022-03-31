import { mySkills } from "./Utilities"

export const Skills = () => {
    
    return (
        <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
                {mySkills.map((value) => {
                    return <li>{value}</li>
                })}
            </ul>
        </div>
    )
}