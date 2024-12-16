import React, { useState } from "react";
import LoginStyle from "../cssFolder/LoginCss.module.css";
import { FaUser, FaLock} from "react-icons/fa";
import { useFetcher } from "react-router-dom";

function Login() {
     // username وpassworلإدارة حالة  useState يستخدم 
    //setUsername و setPassword هما دالتان لتحديث القيم.
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault(); 
  
      const response = await fetch('http://localhost:4000/login', {
        //  استخدامه لانشاء الطلب  ونضع المسار الذي نريد ان نرسل اليهfetch

        method: 'POST', // post  تحديد طريقة الارسال سوف تكون عن طريقة ال 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })   
        //    المحتوى الذي نرغب بارسال يعني ارغب بارسال الايميل والباسوررد
        //    password=wef@sdfال    email =fffff لكي تسهل عليك قرائتها بهذا الشكل    ال  json ال 
      });
  
      const data = await response.json();
      alert(data.message);
    };      


    return (
        <>
            <nav className={LoginStyle.Navbar}>
                <img className={LoginStyle.LogoImg} src="img/hospital-logo.png"></img>
                <ul className={LoginStyle.NavItimes}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/doktor">Doktor</a></li>
                    <li> <a href='/appointment'> Appointment</a></li>

                </ul>
            </nav>
        
            <div className={`${LoginStyle.wrapper}`}>
                <div className={`${LoginStyle.formbox} ${LoginStyle.login}`}>
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className={LoginStyle.inputbox}>
                            <input type="text" placeholder="Email"  onChange={(e)=>{
                                 setEmail(e.target.value)
                                }
                            } required />

                            <FaUser className={LoginStyle.icon} />
                        </div>
                        <div className={LoginStyle.inputbox}>
                            <input type="password" placeholder="password"  onChange={(e)=>{
                                 setPassword(e.target.value)
                                }
                            }required />
                            <FaLock className={LoginStyle.icon} />
                        </div>
                    
                        <button type="submit"> Login</button>
                        <div className={LoginStyle.registerlink}>
                            <p>Don't have an account? <a href="/register">Register</a></p>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
