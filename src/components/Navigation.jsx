
import { useState } from "react";
import "../style/navigation.css";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

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
                <HashLink to="/#top">

                    <h2>STRUCK SERVICES</h2>
                </HashLink>
            </div>
            <div className="second">
         
                <HashLink to="#profil" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>

                    <p>Tentang Kami</p>
                </HashLink>
                <HashLink to="/#services" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>

                    <p>Produk</p>
                </HashLink>
                <HashLink to="/#FAQ" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>

                    <p>FAQ</p>
                </HashLink>
                <HashLink to="/#Footer" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>

                    <p>Kontak</p>
                </HashLink>
                <Link to="/Portofolio">
                
                    <p>Portofolio</p>
                </Link>
             
                <a href="https://wa.me/+6285155341765" target="_blank">Konsultasi Gratis</a>
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
                <p>About Us</p>
                </HashLink>
                <HashLink to="#services" smooth  onClick={()=>setShowSideBar(false)}>

                <p>Product</p>
                </HashLink>
                <HashLink to="#contact" smooth  onClick={()=>setShowSideBar(false)}>

                <p>FAQ</p>
                </HashLink>
                <HashLink to="#contact" smooth  onClick={()=>setShowSideBar(false)}>

                <p>Contact</p>
                </HashLink>
                </div>
            </div>

        </div>

    )
}

export default Navigation