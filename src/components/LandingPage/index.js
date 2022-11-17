
import '../../style.css';

function LandingPage() {
    return (
        <div>
            <div className="row sticky-top contain_navbar">
                <nav className="navbar navbar-expand-lg col">
                    <a className="navbar-brand" href="#"><img src="/Rectangle 74.png" alt='logo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto navbar_list">
                            <li className="nav-item">
                                <a className="nav-link" href="#Our_Services">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Why_Us">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#FAQ">FAQ</a>
                            </li>
                            <li className="nav-item register">
                                <button type="button" className="btn btn_register"><a href='/login'>Login</a></button>
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
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
                                sewa mobil selama 24 jam.
                            </p>
                            <button type="button" className="btn button-order"><a href='/search'>Mulai Sewa Mobil</a></button>
                        </div>
                        <div className="col-lg-6">
                            <img className="title-image" src="/img_car.png" alt="car-mockup" />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="container layanan" id="Our_Services">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-service" src="/img_service.png" alt=''/>
                        </div>
                        <div className="col-lg-6 info_layanan">
                            <h3>Best Car Rental for any kind of trip in Lampung!</h3>
                            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
                                mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                            </p>
                            <ul className="list_layanan">
                                <li>
                                    <p><img className="icom_circle-check" src="/icon_check.png" alt="check"/>Sewa Mobil Dengan Supir di Bali
                                        12 Jam</p>
                                </li>
                                <li>
                                    <p><img className="icom_circle-check" src="/icon_check.png" alt="check"/>Sewa Mobil Lepas Kunci di Bali 24
                                        Jam</p>
                                </li>
                                <li>
                                    <p><img className="icom_circle-check" src="/icon_check.png" alt="check"/>Sewa Mobil Jangka Panjang Bulanan
                                    </p>
                                </li>
                                <li>
                                    <p><img className="icom_circle-check" src="/icon_check.png" alt="check"/> Gratis Antar - Jemput Mobil di
                                        Bandara</p>
                                </li>
                                <li>
                                    <p><img className="icom_circle-check" src="/icon_check.png" alt="check"/>Layanan Airport Transfer / Drop
                                        In Out</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Why Us --> */}
                <div className="container why_us" id="Why_Us">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Why Us ?</h3>
                            <p>Mengapa harus pilih Binar Car Rental?</p>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <img src="/icon_complete.png" className="icon_why_us" alt=""/>
                                    <div className="card-body">
                                        <h4>Mobil Lengkap</h4>
                                        <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <img src="/icon_price.png" className="icon_why_us" alt="icon price"/>
                                    <div className="card-body">
                                        <h4>Harga Murah</h4>
                                        <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <img src="/icon_24hrs.png" className="icon_why_us" alt="icon 24hrs"/>
                                    <div className="card-body">
                                        <h4>Layanan 24 Jam</h4>
                                        <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                                            minggu</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col col-lg-3">
                            <div className="card">
                                <img src="/icon_professional.png" className="icon_why_us" alt="icon profesional"/>
                                    <div className="card-body">
                                        <h4>Sopir Profesional</h4>
                                        <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Testimoni --> */}
                <div className="container testimoni text-center" id="Testimonial">
                    <h3>Testimoni</h3>
                    <p className="text_testimoni">Berbagai review positif dari para pelanggan kami</p>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card mb-3 mx-auto" style={{maxWidth: '540px', background: '#F1F3FF'}}>
                                    <div className="row row_testimoni">
                                        <div className="col-lg-4">
                                            <img src="/img_photo.png" className="img-fluid rounded-start img_testimoni" alt="..."/>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body testimonials">
                                                <img src="/Rate.png" alt=""/>
                                                    <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit, sed do eiusmod”</p>
                                                    <p className="card-text"><small className="text-muted">John Dee 32, Bromo</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card mb-3 mx-auto " style={{maxWidth: '540px', background: '#F1F3FF'}}>
                                    <div className="row g-0 row_testimoni">
                                        <div className="col-lg-4">
                                            <img src="/img_photo 1.png" className="img-fluid rounded-start img_testimoni" alt="..."/>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body testimonials">
                                                <img src="/Rate.png" alt=''/>
                                                    <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit, sed do eiusmod”</p>
                                                    <p className="card-text"><small className="text-muted">John Dee 32, Bromo</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card mb-3 mx-auto" style={{maxWidth: '540px',background: '#F1F3FF'}}>
                                    <div className="row g-0 row_testimoni">
                                        <div className="col-md-4">
                                            <img src="/img_photo 1.png" className="img-fluid rounded-start img_testimoni" alt="..."/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body testimonials">
                                                <img src="/Rate.png" alt=""/>
                                                    <p className="card-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit, sed do eiusmod”</p>
                                                    <p className="card-text"><small className="text-muted">John Dee 32, Bromo</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                        <div className="button_testimoni">
                            <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" class="testimonial-media"><img
                                src="/Left button.png" alt=""/></a>
                            <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" class="testimonial-media"><img
                                src="/Right button.png" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="container container_content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card text-center" style={{background: '#0D28A6'}}>
                                <div className="card-body crd_title_2">
                                    <h5 className="card-title">Sewa Mobil di Lampung Sekarang</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <a href="#" className="btn text-white btn_order ">Mulai Sewa Mobil</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- FAQ --> */}
                <div className="container container_content" id="FAQ">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Frequently Asked Question</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button claclassNamess="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Apa saja syarat yang di butuhkan?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                            <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Berapa hari minal sewa mobil lepas kunci?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                            <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this
                                            being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Berapa hari sebelumnya sebaiknya booking sewa mobil?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                            <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                                            happening here in terms of content, but just filling up the space to make it look, at least at first
                                            glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Apakah ada biaya anta-jemput?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                            <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                                            happening here in terms of content, but just filling up the space to make it look, at least at first
                                            glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            Bagaimana jika terjadi kecelakaan?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                            <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                                            happening here in terms of content, but just filling up the space to make it look, at least at first
                                            glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <a href="tes"><img src="/icon_facebook.png" alt=""/></a>
                                <a href="tes"><img src="/icon_instagram.png" alt=""/></a>
                                <a href="tes"><img src="/icon_twitter.png" alt=""/></a>
                                <a href="tes"><img src="/icon_mail.png" alt=""/></a>
                                <a href="tes"><img src="/icon_twitch.png" alt=""/></a>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <p>Copyright Binar 2022</p>
                            <img src="/Rectangle 74.png" alt=''/>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default LandingPage;