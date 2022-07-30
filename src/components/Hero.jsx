import "./Hero.css";
import herosearch from "../img/Vector.svg";
import herolog2 from "../img/Group.svg";
import heros from "../img/Rectangle 24.png";
import heros2 from "../img/Group 120.png";
import heros3 from "../img/Group 121.png";
import heros4 from "../img/www.svg";
import heros5 from "../img/Rectangle 25.png";

const Hero = () => {
  return (
    <div className="container">
      <div>
        <p className="hero-text">Pojok Baca Probolinggo</p>

        <h2 className="hero-heading">
          Pinjam Buku Secara <span className="hero-spn">Gratis</span> untuk
          Masyarakat
        </h2>

        <div className="hero-box-btn">
          <button className="hero-btn">
            Cari Judul Buku
            <img className="herosearchimg" src={herosearch} alt="" />
          </button>
          <button className="herobtn2">
            Donasi dengan Kami
            <img className="hero-bbb" src={herolog2} alt="" />
          </button>
        </div>

        <div className="flex">
          <div>
            <img className="hero-images" src={heros} alt="" />
            <img className="hero-images eee" src={heros2} alt="" />
          </div>
          <div className="thirty">
            <img className="thirty-2" src={heros3} alt="" />
            <img className="thirty-3" src={heros4} alt="" />
            <img className="thirty-2" src={heros5} alt="" />
          </div>
          <div>
            <img className="hero-images" src={heros} alt="" />
            <img className="hero-images eee" src={heros2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
