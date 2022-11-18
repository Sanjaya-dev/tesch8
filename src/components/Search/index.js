import React from "react";
import "../../carimobil.css";
import ListMobil from "../ListMobil";

function SearchMobil() {
  return (
    <div>
      <div className="row sticky-top contain_navbar">
        <nav className="navbar navbar-expand-lg col">
          <a className="navbar-brand" href="/">
            <img src="/Rectangle 74.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto navbar_list">
              <li className="nav-item">
                <a className="nav-link" href="#Our_Services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Why_Us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#FAQ">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <header>
        <div className="container">
          {/* <!-- title --> */}
          <div className="row title-prodak">
            <div className="col-lg-6">
              <h1>Sewa & Rental Mobil Terbaik di Kawasan Bandar Lampung.</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="title-image"
                src="/img_car.png"
                alt="car-mockup"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
      {/* <!-- cari mobil  --> */}
        <div className="form_cari_mobil">
            <div className="container row">
                <div className="col-lg-3">
                    <label htmlFor="pilih-driver" className="col-lg-4 col-form-label">Tipe Driver</label>
                    <select className="form-select" id="pilih-driver">
                        <option selected>Pilih Tipe Driver</option>
                        <option value="dengan_driver">Dengan Sopir</option>
                        <option value="tanpa_driver">Tanpa Sopir</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <label htmlFor="tanggal" className="col-lg-4 col-form-label">Tanggal</label>
                    <input type="date" className="form-control" placeholder="Pilih Tanggal" id="tanggal"/>
                </div>
                <div className="col-lg-2">
                    <label htmlFor="waktu" className="col-lg-4 col-form-label">waktu</label>
                    <input type="time" id="waktu" className="form-control"/>
                </div>
                <div className="col-lg-2">
                    <label htmlFor="" className="col-lg-12 col-form-label">Jumlah Penumpang</label>
                    <div className="input">

                    </div>
                    <input type="text" id="jumlahPenumpang" className="form-control "/>
                </div>
                <div className="col-lg-2">
                    <button type="button" className="btn btn-primary btn_cari_mobil" id="load-btn">Cari Mobil</button>
                    <button type="button" className="btn btn-primary btn_clear_mobil" id="clear-btn">clear</button>
                </div>
            </div>
        </div>
        <br/>
        <section>
            <div className="container">
                <div id="cars-container">
                  <ListMobil></ListMobil>
                </div>
            </div>
        </section>
      </main>
      <footer>
        <div className="container container_content">
          <div className="row">
            {/* <!-- addres --> */}
            <div className="col-lg-3 ">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            {/* <!-- navigation --> */}
            <div className="col-lg-3 nav_footer">
              <a href="#Our_Services">Our Services</a>
              <a href="#Why_Us">Why Us</a>
              <a href="#Testimonial">Testimonial</a>
              <a href="#FAQ">FAQ</a>
            </div>
            {/* <!-- social media --> */}
            <div className="col-lg-3">
              <div className="sosmed">
                <p>Connect with us</p>
                <a href="tes">
                  <img src="/icon_facebook.png" alt="" />
                </a>
                <a href="tes">
                  <img src="/icon_instagram.png" alt="" />
                </a>
                <a href="tes">
                  <img src="/icon_twitter.png" alt="" />
                </a>
                <a href="tes">
                  <img src="/icon_mail.png" alt="" />
                </a>
                <a href="tes">
                  <img src="/icon_twitch.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <p>Copyright Binar 2022</p>
              <img src="/Rectangle 74.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SearchMobil;
