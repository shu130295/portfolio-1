import { WideCard } from '../components/WideCard';

export const Education = () => {
    return (
        <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <WideCard title="M.Tech Software Engineering" where="VIT University" from="July 2017" to="Present" />
            <WideCard title="SSLC | HSC" where="Islamiah Higher Secondary School" from="2011" to="2017" />
        </div>
    )
}