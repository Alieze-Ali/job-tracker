// Login Page
import React from 'react';
import googleButton from '../assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png'

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
        <div>
            <h2>Login Page</h2>
            <h3>Google OAuth!</h3>
            <button className="btn-auth"  type="button" onClick={()=> auth()}>
                <img className="btn-auth-img" src={googleButton} alt='google sign in'/>
            </button>
        </div>
    );
};

export default Login; 
