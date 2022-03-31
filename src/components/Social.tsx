import { FaCodepen, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
export const Social = () => {
    return (
        <div className="social">
            <a href="https://codepen.io/shu130295" target="_blank" rel="noreferrer"><i className="fab fa-codepen social-padding"><FaCodepen /></i></a>
            <a href="https://github.com/shu130295" target="_blank" rel="noreferrer"><i className="fab fa-github social-padding"><FaGithub /></i></a>
            <a href="https://Instagram.com/shub_agar" target="_blank" rel="noreferrer"><i className="fab fa-instagram social-padding"><FaInstagram /></i></a>
            <a href="https://www.facebook.com/shubham130295" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f social-padding"><FaFacebook /></i></a>
            <a href="https://Linkedin.com/in/shu130295" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in social-padding"><FaLinkedin /></i></a>
            <a href="https://medium.com/shu130295" target="_blank" rel="noreferrer"><i className="fab fa-medium-m"><FaMedium /></i></a>
        </div>
    )
}