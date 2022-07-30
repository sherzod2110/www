import "./Footer.css";
import logo from "../img/Group 137.png";
import img_insta from "../img/uuu.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="dcdc py-4 d-flex align-items-center">
        <div>
          <div className="d-flex align-items-center">
            <img src={logo} alt="" />
            <p className="foot-text">Pojok Baca Probolinggo</p>
          </div>
          <img className="mt-4" src={img_insta} alt="" />
        </div>

        <div className="ddsc d-flex mt-5">
          <ul className="list-unstyled">
            <li>
              <a className="htrth" href="">
                Kontak
              </a>
            </li>
            <li>
              <a className="rger" href="">Email</a>
            </li>
            <li>
              <a className="rger" href="">Alamat</a>
            </li>
            <li>
              <a className="rger" href="">No. Rekening</a>
            </li>
          </ul>

          <ul className="list-unstyled">
            <li>
              <a className="htrth" href="">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className="rger" href="">Umum</a>
            </li>
          </ul>

          <ul className="list-unstyled">
            <li>
              <a className="htrth" href="">
                Galery
              </a>
            </li>
            <li>
              <a className="rger" href="">Kegiatan 2018</a>
            </li>
            <li>
              <a className="rger" href="">Kegiatan 2019</a>
            </li>
            <li>
              <a className="rger" href="">Kegiatan 2020</a>
            </li>
            <li>
              <a className="rger" href="">Kegiatan 2021</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
         
  );
};

export default Footer;
