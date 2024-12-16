import React from "react";
import HomeStyle from "../cssFolder/HomeCss.module.css"


function Home() {
    return (
        <>
            <nav className={HomeStyle.Navbar}>
                <img className={HomeStyle.LogoImg} src="img/hospital-logo.png"></img>
                <ul className={HomeStyle.NavItimes}>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/doktor">Doktor</a></li>
                    <li><a href="/Appointment">Appointment</a> </li>
                    <li> <a href="/log-in">Log in</a></li>

                    
                </ul>
            </nav> {/*Nav end*/}

            
            <header>
                <div className="videoContainer">
                    <video src="video/medical intro.mp4" autoPlay muted />
                </div>
            </header> {/*Header End*/}

            <section className={HomeStyle.InfoContainer}>
                <div className={HomeStyle.paragraf1}    >
                    <p>
                        <h3>Patient focused and forward thinking.</h3>

                        Patients are at the center of all we do at Cardiocare.We are dedicated <br />
                        to the innovative delivery of cardiac care to ensure our patients receive <br />
                        the very best in cutting edge cardiac diagnostics and treatment.  We are  <br />
                        focused on getting patients the care they need and the answers they <br />
                        are looking for quickly. At Cardiocare, this philosophy extends beyond <br />
                        the office; our cardiologists are accessible to patients 24/7 by email and phone.
                    </p>
                    <img className={HomeStyle.Img1} src="img/yat.png"></img>
                </div>

                <div className={HomeStyle.paragraf2} >
                    <img className={HomeStyle.Img2} src="img/fotokonu.png"></img>
                    <p>
                        <h3>Highly trained cardiologists dedicated <br /> to unparalleled cardiovascular care.</h3>
                        The cardiologists at CardioCare were educated at the top medical <br />
                        institutions in the country and have decades of experience under their <br />
                        belts.  They are leaders in their field and have consistently been judged  <br />
                        by their patients and their peers to be the best at preventing, <br />
                        diagnosing, and treating the wide breadth of cardiac conditions. <br />
                    </p>
                </div>
            </section>

            <section className={HomeStyle.SERVICES}>
                <div className={HomeStyle.header}>
                    <h3>SERVICES</h3>
                    <h1>From prevention to complex intervention.</h1>
                    <p>We deliver the full range of cardiac care - from preventing the development of 
                        cardiovascular disease to performing highly technical cardiac interventions.
                         Such comprehensive care requires timely appointments with our cardiologists and often also requires cardiac imaging studies, 
                         stress tests, lab work, and other diagnostic tools. We are able to offer the full range of these services in our office and 
                         at local hospitals.</p>
                </div>
                <div className={HomeStyle.services}>
                    <div className={HomeStyle.serviceitem}>
                        <img className="img3" src="img/images.png" alt="Cardiovascular Risk Assessments" ></img>
                        <h4>Cardiovascular Risk Assessments</h4>
                    </div>
                    <div className={HomeStyle.serviceitem}>
                        <img className="img4" src="img/bilgisayar.png" alt="Diagnostic Testing"></img>
                        <h4>Diagnostic Testing</h4>
                    </div>
                    <div className={HomeStyle.serviceitem}>
                        <img className="img5" src="img/images (2).png" alt="Appointments"></img>
                        <h4>Appointments</h4>
                    </div>
                </div>
            </section>

            <section className={HomeStyle.locations}>
                <div className={HomeStyle.locationsmap}>
                    <h3>LOCATIONS</h3>
                    <h4> Where to find us </h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.917705998547!2d-122.0842494847084!3d37.42206597982581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e454e2bf03%3A0x7a70c47b1e4e6c7d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1632931163544!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </section >

            <section className={HomeStyle.end}>
                <div className={HomeStyle.Services}>
                    <h3>Services</h3>
                    <p>Cardiovascular Risk</p>
                    <p>Assessments</p>
                    <p>Diagnostic Testing</p>
                    <p>Appointments</p>
                </div>
                <div className={HomeStyle.Follow}>
                    <h3>Follow us</h3>
                    <img src="img/instagram.png" alt="Instagram" />
                    <img src="img/facebook.png" alt="Facebook" />
                </div>

            </section>


           


        </>
    );
}

export default Home;