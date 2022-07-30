import "./Header.css";

import logo from "../img/Group 137.png";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex justify-content-between">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <div className="header-box">
            <ul className="header-nav">
              <li>Beranda</li>
              <li>Koleksi</li>
              <li>Syarat dan Ketentuan</li>
              <li>Kontak</li>
            </ul>
            <button className="header-btn">Masuk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
