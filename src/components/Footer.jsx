
import "../style/footer.css"
import { BiLogoWhatsapp, BiLogoGmail, BiLocationPlus } from "react-icons/bi";

const Footer =()=> {
    return (
        <section id="Footer">
            <div>
                <h1>Struck Services</h1>
                <p><BiLogoWhatsapp/>  +62 8515-5534-1765</p>
                <p><BiLocationPlus/> Yogyakarta</p>
            </div>
            <p>© 2023 Struck Services Jaya Abadi All Right Reserved.</p>
        </section>
    )
}

export default Footer

