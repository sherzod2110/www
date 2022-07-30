import "./Circle.css";

import circle from "../img/111.png";

const Circle = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center py-5">
        <div className="d-flex align-items-center gap-3 bnnama">
          <img src={circle} alt="" />
          <div>
            <p className="sum m-0">500+</p>
            <span>Judul Buku</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 bnnama">
          <img src={circle} alt="" />
          <div>
            <p className="sum m-0">$0</p>
            <span>Gratis Peminjaman</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <img src={circle} alt="" />
          <div>
            <p className="sum m-0">5</p>
            <span>Kegiatan Rutin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
