
import "../style/body.css";
import { HashLink as Link} from "react-router-hash-link";
import { BiLogoWhatsapp, BiLogoGmail } from "react-icons/bi";
import { data } from "./data-slider";

const Body =()=> {
    return (
        <div className="body-container">
            <section id="hero">
                <h1>Service AC Profesional</h1>
                <p>Berpengalaman lebih dari 5 tahun di bidang<br></br> maintenance AC</p>
                <Link to="#contact" smooth>

                <a>Kontak Kami Sekarang</a>
                </Link>
            </section>
            <section id="profil">
                <h1>Tentang Kami</h1>
                <p>AC kini telah menjadi kebutuhan primer di rumah maupun perkantoran. Mengingat panasnya suhu di negara tropis seperti Indonesia, membuat penggunaan AC kian meningkat. Untuk mewujudkan ruangan yang sejuk dan nyaman, AC harus dirawat dan diservis secara rutin. Untuk itulah kami hadir, Muda Karya sebagai penyedia berbagai layanan di bidang AC, profesional lebih dari 5 tahun dengan berbagai brand-brand AC terkenal
</p>
<a>Lihat Penawaran Jasa Kami</a>
            </section>
            <section id="services">
                <div className="card">
                    <h3>Jasa Service AC </h3>
                    <p>Dengan menggunakan jasa service AC Muda Karya, Anda dapat memesan layanan untuk kapan saja tergantung kebutuhan. Teknisi service AC kami telah terverifikasi dan terdapat garansi perbaikan dengan fitur Full Protection hingga 30 hari setelah pengerjaan jasa.</p>

                </div>
                <div className="card">
                    <h3>Cuci AC</h3>
                    <p>Layanan cuci AC berfungsi untuk membersihkan bagian luas dan dalam unit AC. Dengan layanan ini, udara yang dihasilkan akan lebih bersih dan AC jadi tahan lama.</p>

                </div>
                <div className="card">
                    <h3>Tambah Freon</h3>
                    <p>Menambah freon pada unit AC dibutuhkan jika kadar freon berkurang. Umumnya, AC tidak akan dingin saat freonnya mulai berkurang.</p>

                </div>
                <div className="card">
                    <h3>Pasang AC</h3>
                    <p>Jasa pasang AC bisa Anda pesan untuk kebutuhan pemasangan AC yang baru saja dibeli. Teknisi Sejasa akan bantu memasang dan memperkirakan posisi AC yang sesuai dengan ruangan Anda.</p>

                </div>
                <div className="card">
                    <h3>Bongkar AC</h3>
                    <p>Jika suatu unit AC tidak digunakan lagi atau ingin mengganti dengan yang baru, jasa bongkar AC adalah solusinya. Teknisi AC akan membantu proses pembongkaran AC.</p>

                </div>
                <div className="card">
                    <h3>Perbaikan Semua Brand AC</h3>
                    <p>Teknisi AC di Muda Karya juga dapat memperbaiki AC berbagai tipe dan merek, kami melayani service AC Panasonic, service AC Daikin, service AC Sharp, service AC Fujitsu, service AC Samsung, hingga service AC Changhong.</p>

                </div>

            </section>
            <section id="gallery">
                <h1>Gallery</h1>
                <div className="slider">
                    {data.map(data=> (
                        <>
                            <img src={data.image} />
                        </>
                    ))}
                </div>

            </section>
            <section id="contact">
                <h1>Kontak Kami</h1>
                <div className="contact-card">
                    <BiLogoWhatsapp className="icon"/>
                    <a href="https://wa.me/+6281927098771" target="_blank">081927098771</a>
                </div>
                <div className="contact-card">
                    <BiLogoGmail className="icon"/>
                    <a href="mailto:karirkita1@gmail.com">karirkita1@gmail.com</a>
                </div>
            </section>
        </div>
    )
}

export default Body