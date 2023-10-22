
import "../style/body.css";
import { HashLink, HashLink as Link} from "react-router-hash-link";
import { BiLogoWhatsapp, BiLogoGmail } from "react-icons/bi";
import hero from "../assets/UI.png";
import hero2 from "../assets/verification.png"
import color from "../assets/Colour.png";
import { dataProduct } from "./data-product";
import search from "../assets/Search.png";
import { DataFAQ } from "./data-faq";
import { useState } from "react";
import { dataBenefit } from "./data-benefit";


const Body =()=> {

    const [Faq, setFaq] = useState(null)

    const [input, setInput] = useState("")

    const toggle =(index)=> {
        if (Faq==index) {
            return setFaq(null)
        } 

        setFaq(index)
    }
   
    return (
        <div className="body-container">
            <section id="hero">
                <div className="tittle">
                    <div className="tittle-container">
                    <h1><span>Upgrade</span> Performa Bisnis</h1>
                    <p>dengan digitalisasi dan publish bisnis mu di Internet</p>
                    
                    </div>
                    <div className="button-container">
                        <HashLink to="#profil" smooth>

                        <a className="main-button">Tentang Kami</a>
                        </HashLink>

                        <HashLink to="#services">

                            <a className="second-button">Cek Jasa Kami</a>
                        </HashLink>

                    </div>
                </div>
                
                <div className="hero-image">
                    <img src={hero} />
                </div>
            </section>
            <section id="profil">
                <div className="hero-image">
                    <img src={hero2} />
                </div>
                <div className="about-container">
                <h1>Tentang <span>Kami</span></h1>
                <p>Struck Services adalah sebuah tim profesional yang berkomitmen untuk membantu Anda mewujudkan visi digital Anda. Dengan pengalaman yang mendalam dalam pengembangan produk digital, khususnya dalam menciptakan website dan aplikasi yang inovatif, kami siap menjadi mitra Anda dalam perjalanan menuju kesuksesan digital. Dari konsep hingga peluncuran, kami berusaha untuk menjadikan setiap produk digital sebagai representasi terbaik dari bisnis Anda.
                    </p>
                </div>
            </section>
            <section id="profil-2">
                <h1>Mengapa Memilih Kami?</h1>
                <div className="benefit-container">
                    {dataBenefit.map(data => (
                         <div className="benefit-card">
                         <div className="icon">{data.icon}</div>
                         <div>
                            <h4>{data.tittle}</h4>
                            <p>{data.desc}</p>
                         </div>
                     </div>
                    ))}
                </div>
            </section>
            <section id="services">
            <div className="search-bar">
                    <h1>Apa yang kamu butuhkan ?</h1>
                    <div className="input-bar">
                    <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Cari sesuatu"></input>
                    </div>
                </div>
                <div className="card-container">
                    {dataProduct.filter(data => {
                        const SearchTerms = input.toLowerCase();
                        const filteredData = data.description?.toLowerCase();

                        return filteredData.includes(SearchTerms)
                    }).map(data=> (
                    <div className="card">
                        <h2>{data.tittle}</h2>
                        <p>{data.description}</p>
                        <h2>Mulai Dari</h2>
                        <div className="price">
                            <h2>{data.discount*100}%</h2>
                            <h2>Rp.{data.harga},00</h2>
                             <h1>Rp.{data.harga*data.discount},00</h1>
                        </div>
                        <a href="https://wa.me/+6285155341765" target="_blank" className="booking-button">Booking Sekarang</a>
                    </div>
                    ))}

                </div>

            </section>
            <section id="FAQ">
                <h1>F.A.Q</h1>
                <div className="faq-container">

                {DataFAQ.map((data, index)=> {
                    return (
                        <>
                        <div className={Faq==index ? "question-card active":"question-card"} onClick={()=>toggle(index)}>
                        <p>{data.Question}</p>
                        </div>     
                        <div key={index} className={Faq==index ? "answer-card":" hide"}><p>{data.Answer}</p></div>
                        </>
                    )
                })}
                   
                </div>
            </section>
        </div>
    )
}

export default Body