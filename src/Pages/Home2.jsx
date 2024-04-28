import { Link } from "react-router-dom";
import spotify from '../Images/spotify.png';
import music from '../Images/music.png';
import icon from '../Images/icon.png';
import group from '../Images/group.png';
import soundcloud from '../Images/soundcloud.png'

function Home2() {
    return (
        <div className="App2">
            <div id="curve" ></div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div id="home2" ></div>
            </Link>
            <div className="buttons" >
                <Link to="/store" style={{ textDecoration: 'none' }} >
                    <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Store</button>
                </Link>
                <Link to="/live" style={{ textDecoration: 'none' }}>
                <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Live</button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button class="basket" style={{width: "170px", height: "50px", fontSize: "18px", marginBottom: "12px"}} >Contact</button>
                </Link>
            </div>
            <a href="https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" className="excess" >
                <button onClick={()=>window.location.replace("https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing")} class="basket" id="excess" >Excess</button>
                <div style={{display: "inline-flex"}}>
                    <img src={spotify} className="icons"/>
                    <img src={music} className="icons"/>
                    <img src={icon} className="icons"/>
                    <img src={group} className="icons"/>
                    <img src={soundcloud} className="icons"/>
                </div>
                <button class="basket" id="officialLyricVideo" >Official Lyric Video</button>
            </a>
            <a href="https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" className="dawn">
                <button onClick={()=>window.location.replace("https://soundcloud.com/user-290238382?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing")} class="basket" id="excess" >Dawn</button>
                <div style={{display: "inline-flex"}}>
                    <img src={spotify} className="icons" />
                    <img src={music} className="icons" />
                    <img src={icon} className="icons" />
                    <img src={group} className="icons" />
                    <img src={soundcloud} className="icons" />
                </div>
                <button class="basket" id="officialLyricVideo" >Official Lyric Video</button>
            </a>
        </div>)
}

export default Home2;