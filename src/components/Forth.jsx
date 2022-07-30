import "./Forth.css";
import person_guy from "../img/guy.png";
import person_guy2 from "../img/eeee.svg";
import left from "../img/left.svg";
import right from "../img/right.svg";
import tochka from "../img/tochka.svg";

const Forth = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <p className="text-apa">Apa Kata Mereka?</p>
        <p className="text-sele">Selengkapnya</p>
      </div>

      <div className="py-3 d-flex align-items-center gap-5">
        <div className="section-box-4">
          <p className="text-amet">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="d-flex align-items-center gap-2">
            <img src={person_guy} alt="" />
            <div>
              <p className="guy-title">Guy Hawkins</p>
              <span className="guy-info">32 Tahun, Karyawan</span>
            </div>
          </div>
          <img className="img-left" src={left} alt="" />
        </div>

        <div className="section-box-4">
          <p className="text-amet">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="d-flex align-items-center gap-2">
            <img src={person_guy2} alt="" />
            <div>
              <p className="guy-title">Brooklyn Simmons</p>
              <span className="guy-info">20 Tahun, Mahasiswa</span>
            </div>
          </div>
          <img className="img-right" src={right} alt="" />
        </div>

      </div>
        <div className="text-center py-3">
            <img src={tochka} alt="" />
        </div>
    </div>
  );
};

export default Forth;
