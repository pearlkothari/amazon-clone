import React, { Component, useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return(
        <div className='Login'>
            <Link to='/'>
                <img 
                    className='amazon_logo'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
                />
            </Link>
            <div className='Login_Container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>

                    <button className='Sign__Login'>Sign In</button>
                </form>
                <p>If you don't have an account?create one</p>
                <button className='Create__Account'>Create Account</button>
            </div>
        </div>
    )
}

export default Login;