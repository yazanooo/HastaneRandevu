import React, { useState } from 'react';
import doktorStyle from "../cssFolder/DoktorCss.module.css";


export function Doktor() {
    const [modalVisible, setModalVisible] = useState(false);
    const [secilenDoktor, setSecilenDoktor] = useState("");

    const openModal = (doktor) => {
        setSecilenDoktor(doktor);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const doktorlar = [
        { name: "PROF. UZI BELLER", img: "img/dok1.png", telefon:"0532478326"},
        { name: "PROF. MARCEL LEVI", img: "img/doktor 2.png", telefon:"90239026" },
        { name: "PROF. ZEEV ROTSTEIN", img: "img/doktor 3.png", telefon:"000000000532478326" },
        { name: "PROF. MELVIN SAMSOM", img: "img/doktor 4.png", telefon:"05322222222222478326" },
        { name: "PROF. EYAL ZIMLICHMAN", img: "img/doktor 5.png", telefon:"0532478326" },
        { name: "PROF. ZEEV ROTSTEIN", img: "img/doktor 6.png", telefon:"05366666662478326" },
        { name: "PROF. ZEEV ROTSTEIN", img: "img/doktor 7.png", telefon:"05324333333378326" },
    ];
    

    return (
        <>
            <nav className={doktorStyle.Navbar}>
                <img className={doktorStyle.LogoImg} src="img/hospital-logo.png"></img>
                <ul className={doktorStyle.NavItimes}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/appointment'> Appointment</a></li>
                    <li><a href='/log-in'> Log in</a></li>
    
                </ul>
            </nav>
        
            <section className={doktorStyle.DOKTORLAR}>
                <div className={doktorStyle.STEERINGCOMMITTEE} >
                    <h4 className='STEERING'> STEERING </h4>
                    <h3 className='COMMITTEE'> COMMITTEE </h3>
    
                </div>

                <div className={doktorStyle.doktorlar}>
                  {doktorlar.slice(0,3).map((doktor, index) => (
                     <div key={index} className={doktorStyle.birincisatirdok}>
                        <img className="birincidok" src={doktor.img} alt={doktor.name} />
                        <h4>{doktor.name}</h4>
                        <h5><a onClick={()=> openModal(doktor)}>Read More</a></h5>
                     </div>
                    ))}
                    
                </div>
                <div className={doktorStyle.doktorlarAsaga}>
                    {doktorlar.slice(3).map((doktor, index) => (
                        <div key={index} className={doktorStyle.ikincisatirdok}>
                            <img className="birincidok" src={doktor.img} alt={doktor.name} />
                            <h4>{doktor.name}</h4>
                            <h5><a onClick={() => openModal(doktor)}>Read More</a></h5>
                        </div>
                    ))}
                </div>
            </section>
    
            {modalVisible && (
                    <div id='readMore' className={doktorStyle.readMore}>
                        <div className={doktorStyle.modalContent}>
                            <h1>{secilenDoktor.name}</h1>
                            <h2>{secilenDoktor.telefon}</h2>
                            <button onClick={closeModal}>Close</button>
                            
                        </div>
                    </div>
                )}

                
        
        </>
    
    )
    }
    
export default Doktor;
