
import { useState } from "react";
import "../style/navigation.css";
import { HashLink } from 'react-router-hash-link';

const Navigation =()=> {

    const [showSideBar, setShowSideBar] = useState(false);

    const [navbar, setNavbar] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 40) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeNavbar)

    return(
        <div className={navbar ? "nav-container fixed":"nav-container"}>
            <div className="main">
                <HashLink to="#top" smooth>
                    <h2>Muda Karya</h2>
                </HashLink>
            </div>
            <div className="second">
         
                <HashLink to="#profil" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>

                    <p>Profil</p>
                </HashLink>
                <HashLink to="#services" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>

                    <p>Service AC</p>
                </HashLink>
                <HashLink to="#contact" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>

                    <p>Hubungi Kami</p>
                </HashLink>
            </div>
            <div className="burger" onClick={()=>setShowSideBar(true)}>
                <div className="stripe"></div>
                <div className="stripe"></div>
                <div className="stripe"></div>
            </div>

            <div className={showSideBar ? "side-bar":"hide-bar"}>
                <div className="exit">
                  <p onClick={()=>setShowSideBar(false)}>x</p>  
                </div>
                <div className="list">
                <HashLink to="#profil" smooth  onClick={()=>setShowSideBar(false)}>

                <p>Profil</p>
                </HashLink>
                <HashLink to="#services" smooth  onClick={()=>setShowSideBar(false)}>

                <p>Service AC</p>
                </HashLink>
                <HashLink to="#contact" smooth  onClick={()=>setShowSideBar(false)}>

                <p>Hubungi Kami</p>
                </HashLink>
                </div>
            </div>

        </div>

    )
}

export default Navigation