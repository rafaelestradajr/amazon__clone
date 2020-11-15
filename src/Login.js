import { Link,useHistory } from 'react-router-dom';
import React, {useState} from 'react';
import './Login.css';
//import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Login(){



    const [email,setEmail]=useState('');
    const history=useHistory();

    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();
        //some firebase login

    }

    const register=e=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then ((auth) =>{

            //it successfully created new user with email and password

            if (auth){
                history.push('/')
            }
           // console.log(auth);
        })
        .catch(error =>alert(error.message))

        //do some firebase register
    }


    return (
        <div className='login'>
            <Link to= '/'>
            <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo'
            />
            </Link>
            <div
                className='login__container'>
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                        <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                    </form>

                    <p>By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
                          Please see our Privacy Notice,
                        our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
