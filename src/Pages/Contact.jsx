import { Link } from "react-router-dom";
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import soundcloud from '../Images/soundcloud.png'
import ig from '../Images/ig.png'

function Contact() {
    return (
        <div className="Background">
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <div id="home2" style={{top: "130px"}}></div>
            </Link>
            <h1 style={{marginTop: "220px", marginBottom: "100px"}}>Contact</h1>
            <a href="mailto:alexey.katiev@gmail.com" class="basket" id="email">Email</a>
                <button onClick={()=>window.location.replace("https://on.soundcloud.com/JFZ6sxfYRULhJJvn8")} style={{display: "inline-flex", marginTop: "auto", marginBottom: "0"}}>
                    <img src={ig} className="icons"/>
                    <img src={soundcloud} className="icons"/>
                    <img src={twitter} className="icons"/>
                    <img src={facebook} className="icons"/>
                </button>
        </div>)
}

export default Contact;