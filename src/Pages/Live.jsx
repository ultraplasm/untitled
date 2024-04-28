import { Link } from "react-router-dom";
import spotify from '../Images/spotify.png';
import music from '../Images/music.png';
import icon from '../Images/icon.png';
import group from '../Images/group.png';
import soundcloud from '../Images/soundcloud.png'
import ig from '../Images/ig.png'

function Live() {
    return (
        <div className="Background">
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <div id="home2" style={{ top: "130px" }}></div>
            </Link>
            <h1 style={{ marginTop: "230px", marginBottom: "20px" }}>Live</h1>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <button onClick={()=>window.location.replace("https://www.instagram.com/p/C01MrnPixVw/?igsh=MWwzOTdmYTFyYzk3dg==")} class="basket" style={{padding: "12px", marginTop: "20px"}}>24.12 Moscow - “.Wav Part 3”</button>
                    <a href="https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" class="basket" style={{padding: "12px", marginTop: "20px"}}>27.02 London - TBA</a>
                    <a href="https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" class="basket" style={{padding: "12px", marginTop: "20px"}}>15.03 London - TBA</a>
                    <a href="https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" class="basket" style={{padding: "12px", marginTop: "20px"}}>25.03 London - TBA</a>
                </div>
                <a href="https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" style={{display: "inline-flex", marginBottom: "0", marginTop: "auto"}}>
                    <img src={spotify} className="icons"/>
                    <img src={music} className="icons"/>
                    <img src={icon} className="icons"/>
                    <img src={group} className="icons"/>
                    <img src={soundcloud} className="icons"/>
                    <img onClick={()=>window.location.replace("https://www.instagram.com/ultraplasm?igsh=ZTZidzh6dnY1MHY0&utm_source=qr")} src={ig} className="icons"/>
                </a>
        </div>)
}

export default Live;