import "./Fifth.css";
import sectionimg5 from "../img/xxx.svg";
import sectionimg6 from "../img/zzz.svg";
import sectionimg7 from "../img/fff.svg";

const Fifth = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <p className="section-text-5">Kegiatan Pojok Baca Probolinggo</p>
        <p className="section-text-spn">Selengkapnya</p>
      </div>
      <p className="section-text-spn2">
        Intip kegiatan yang telah kami selenggarakan{" "}
      </p>
      <div className="section-5-box">
        <img src={sectionimg5} alt="" />
        <img src={sectionimg6} alt="" />
        <img src={sectionimg7} alt="" />
      </div>
    </div>
  );
};

export default Fifth;
