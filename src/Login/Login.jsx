import React, { useState } from "react";
import './Login.css'
import { Link ,useHistory} from "react-router-dom";
import { auth } from "../firebase";
import Button from '@mui/material/Button'

function Login(){
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=event=>{
        event.preventDefault();
        // This prevent Page from refreshing we dont want refresh in react!!
        /* 
            Some Fancy Firebase Login
        */
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            if(auth){
                history.push('/');
            }
        })
        .catch(error=> alert(error.message));
    }

    const register= event=>{
        event.preventDefault();
        /*
             Some fancy Firebase Register
        */
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error=>alert(error.message));
    }
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
                    <input type='text' value={email} 
                        onChange={event=>setEmail(event.target.value)}
                    />
                    <h5>Password</h5>
                    <input type='password' value={password}
                        onChange={event=>setPassword(event.target.value)}
                    />

                    <Button variant='contained' onClick={signIn}
                        className='Sign__Login'>Sign In</Button>
                </form>
                <p>If you don't have an account?create one</p>
                <Button variant='contained' onClick={register} className='Create__Account'>Create Account</Button>
            </div>
        </div>
    )
}

export default Login;