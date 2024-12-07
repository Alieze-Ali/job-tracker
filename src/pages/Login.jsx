// Login Page
import React from 'react';
import googleButton from '../assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png'
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {

    function navigate(url){
        window.location.href = url;
    }

    async function auth(){
        const response =await fetch('http://127.0.0.1:3000/request',{method:'post'});
    
        const data = await response.json();
        console.log("data from auth function in App.jsx", data);
        navigate(data.url);
    }

    return (
<<<<<<< HEAD
        <div>
            <h2>Login Page</h2>
            <h3>Google OAuth!</h3>
            <button className="btn-auth"  type="button" onClick={()=> auth()}>
                <img className="btn-auth-img" src={googleButton} alt='google sign in'/>
            </button>
=======
        <div className="login-container">
            <div className="login-box">
                <h2>Login Page</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" />
                        </div>
                        <button type = "submit" className="login-button">Login</button>     
                </form>
                <p className="register-prompt">
                    Don't have an account? <Link to="/create-account">Register</Link>
                </p>
            </div>
>>>>>>> 14608a1 (added login form and css)
        </div>
        
    );
};

export default Login; 
