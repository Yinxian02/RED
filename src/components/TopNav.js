import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import "../styles/TopNav.css";

const TopNav = () => {
    return (
        <div className="top-nav">
             <a href="https://www.facebook.com/redprojectborneo" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon"/>
            </a>
            <a href="https://www.instagram.com/redprojectborneo" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="social-icon"/>
            </a>
            <a href="https://www.youtube.com/@redprojectborneo1084" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="social-icon"/>
            </a>
        </div>
    )
}

export default TopNav;