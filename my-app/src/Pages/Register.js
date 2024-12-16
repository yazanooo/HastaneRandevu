import React, { useState } from "react";
import RegisterStyle from "../cssFolder/RegisterCss.module.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import HomeStyle from "../cssFolder/HomeCss.module.css"

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
  
      const data = await response.json();
      alert(data.message);
    };

    return (
        <>
        <nav className={HomeStyle.Navbar}>
                <img className={HomeStyle.LogoImg} src="img/hospital-logo.png"></img>
                <ul className={HomeStyle.NavItimes}>
                    <li>Home</li>
                    <li><a href="/">Doktor</a></li>
                    <li> <a href='/'> Appointment</a></li>
                    <li> <a href='/'> Log in</a></li>

                    
                </ul>
            </nav>

            
        
            <div className={`${RegisterStyle.wrapper1}`}>
                <div className={`${RegisterStyle.formbox} ${RegisterStyle.register}`}>        
                    <form onSubmit={handleRegister}>
                        <h1>Registration</h1>
                        <div className={RegisterStyle.inputbox}>
                            <input type="text" placeholder="Username" onChange={(e)=>{
                                 setUsername(e.target.value)
                                }
                            } required />
                            <FaUser className={RegisterStyle.icon} />
                        </div>
                        <div className={RegisterStyle.inputbox}>
                            <input type="email" placeholder="Email" onChange={(e)=>{
                                 setEmail(e.target.value)
                                }
                            } required />
                            <FaEnvelope className={RegisterStyle.icon} />
                        </div>
                        <div className={RegisterStyle.inputbox}>
                            <input type="password" placeholder="password" onChange={(e)=>{
                                 setPassword(e.target.value)
                                }
                            } required />
                            <FaLock className={RegisterStyle.icon} />
                        </div>
                        <div className={RegisterStyle.rememberforgot}>
                            <label>
                                <input type="checkbox" /> I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit"> Register</button>
                        <div className={RegisterStyle.registerlink}>
                            <p>Already have an account? <a href="/log-in">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
