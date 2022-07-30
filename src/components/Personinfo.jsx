import './Personinfo.css'

import person1 from '../img/person.svg'
import person2 from '../img/aaa.svg'

const Personinfo = () => {
  return (
    <div className="container">
      <div className="qwerty">

        <h3 className="info-heading">Kenapa Kita <span className="info-spn">Harus</span> Membaca Buku?</h3>

        <div className="d-flex gap-4">
          <div className="info-box">
              <p className="info-span2">“Aku rela dipenjara asalkan <span className="info-bnn">bersama buku</span>, karena dengan buku <span className="info-bnn">aku bebas</span> ”</p>
              <div className="d-flex small-box">
                <img src={person1} alt="" />
                <div>
                  <p className="m-0 title">Mohammad Hatta</p>
                  <span className='spn-wakil'>Wakil Presiden Indonesia Pertama</span>
                </div>
              </div>
          </div>
          <div className="info-box">
              <p className="info-span2">“Aku rela dipenjara asalkan <span className="info-bnn">bersama buku</span>, karena dengan buku <span className="info-bnn">aku bebas</span> ”</p>
              <div className="d-flex info-person-2">
                <img src={person2} alt="" />
                <div className=''>
                  <p className="m-0 title">Najwa Shihab</p>
                  <span className='spn-wakil'>Duta Membaca</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personinfo;
