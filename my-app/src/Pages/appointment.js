import React, { useState } from "react";
import AppointmentStyle from "../cssFolder/appointment.Css.module.css";// تأكد من أن الملف موجود في نفس المسار

function Appointment() {

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [condition, setCondition] = useState('');
    const [description, setDescription] = useState('');


    const handleAppointment = async (e) => {
      e.preventDefault();
  
      const response = await fetch('http://localhost:4000/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, phone, date, condition, description })
      });
  
      const data = await response.json();
      alert(data.message);
    };

    return (
        <>
            <nav className={AppointmentStyle.Navbar}>
                <img className={AppointmentStyle.LogoImg} src="img/hospital-logo.png" alt="Hospital Logo" />
                <ul className={AppointmentStyle.NavItems}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/doktor">Doctor</a></li>
                    <li><a href="/log-in">Log in</a></li>
                </ul>
            </nav>

            <div className={AppointmentStyle.container}>
                <div className={AppointmentStyle.formContainer}>
                    <h2>Book an Appointment</h2>
                    <p>Primary care appointments and some specialties</p>
                    <form onSubmit={handleAppointment}>
                        <div className={AppointmentStyle.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" onChange={(e)=>{
                                 setFullName(e.target.value)
                                }
                            } required />
                        </div>
                        <div className={AppointmentStyle.inputGroup}>
                            <label htmlFor="phone">Your Phone</label>
                            <input type="text" id="phone" name="phone" onChange={(e)=>{
                                 setPhone(e.target.value)
                                }
                            } required />
                        </div>
                        <div className={AppointmentStyle.inputGroup}>
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name="date" value={date} min={date} onChange={(e)=>{
                                 setDate(e.target.value)
                                }
                            } required />
                        </div>
                        <div className={AppointmentStyle.inputGroup}>
                            <label htmlFor="condition">Condition</label>
                            <input type="text" id="condition" name="condition" onChange={(e)=>{
                                 setCondition(e.target.value)
                                }
                            } required />
                        </div>
                        <div className={AppointmentStyle.inputGroup}>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" onChange={(e)=>{
                                 setDescription(e.target.value);
                                }
                            } required></textarea>
                        </div>
                        <button type="submit">Book Now</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Appointment;
