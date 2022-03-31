import ReactTypingEffect from 'react-typing-effect';
import { Social } from '../components/Social';
// @ts-ignore  
import profilepic from '../img/dp.JPG';
import { myName, myTitle } from './Utilities';

export const Home = () => {
    return (
        <div className="condiv home">
            <img src={profilepic} className="profilepic" alt="profile" />
            <br />
            <ReactTypingEffect className="typingeffect" text={[`I am ${myName}`, `I am a ${myTitle}`]} speed={100} eraseDelay={700} />
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '5vh'}}><Social /></div>
        </div>
    )
}