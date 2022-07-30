import "./Section6.css";

import water from "../img/water.svg";
import whatsap from "../img/Vecto.svg";

const Section6 = () => {
  return (
    <div className="container">
      <div className="text-center py-4">
        <p className="section6-text">
          Ingin <span className="text-success">Membantu</span> Meningkatkan
          Literasi Anak-Anak Sekitar Kita?
        </p>
        <p className="section6-spn">Percayakan melalui kegiatan kita</p>
        <button className="section6-btn">
          Donasi dengan Kami
          <img className="ms-3 mb-1" src={water} alt="" />
        </button>
        <span className="q1 d-block mt-1">Atau</span>

        <button className="sec-btn">Hubungi Kami
            <img className="ms-2" src={whatsap} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Section6;
