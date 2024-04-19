import { useState } from 'react';
import axios from 'axios';

function Login() {
    const BASE_URL = "https://api-dev.quicklyinc.com";
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [loginSuccessful, setLoginSuccessful] = useState(true);
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
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
                setLoginSuccessful(true);
                window.location.href = '/';
        }).catch(error=>{
            setLoginSuccessful(false);
        });
    }
    return (
        <div className="container" style={{marginTop: '10px'}}>
            <div className="border rounded-5 row align-items-center">
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <section className="w-100 p-4 d-flex justify-content-center pb-4">
                    {/* for error message*/}
                    <div style={{color: 'red', display: emailIsValid ? 'none' : ''}}>Email is not valid</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <label htmlFor="email">Email:</label>
                            <input name="email" id="email" type="email" onChange={handleEmail} value={email} className="form-control"/>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" onChange={handlePassword} value={password}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>SIGN IN</button>
                    </form>
                </section>
                <div style={{textAlign: 'center'}}>Not Sign Up Yet? Go <a href="/sign-up">Sign Up</a></div>
                <br/>
                <section className="w-100 p-4 justify-content-center pb-4">
                    <div style={{color: 'red', display: loginSuccessful ? 'none' : '', textAlign: 'center'}}>Login failed!</div>
                </section>
            </div>
        </div>
    );
}
export default Login;