import { useState } from 'react';
import axios from 'axios';

function Login() {
    const BASE_URL = "https://api-dev.quicklyinc.com";
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidEmail = regex.test(email);
        setEmailIsValid(isValidEmail);
        if(!isValidEmail) {
            return;
        }
        const reqBody = {
            "email": email,
            "password": password,
        };

        axios.post(BASE_URL + '/auth/login', reqBody).then(res=>{
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", res.user);
                window.location.href = '/';
        });
        setSubmitted(true);
    }
    return (
        <div>
            <h1>Login</h1>
            {/* for error message*/}
            <div style={{color: 'red', display: emailIsValid ? 'none' : ''}}>Email is not valid</div>
            <div>Not Sign Up Yet? Go <a href="/sign-up">Sign Up</a></div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" onChange={handleEmail} value={email}/>
                <br/>
                <label>Password</label>
                <input type="password" onChange={handlePassword} value={password}/>
                <br/>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );}
export default Login;