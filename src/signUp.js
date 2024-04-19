import { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const BASE_URL = "https://api-dev.quicklyinc.com";
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [isSignUp, setIsSignUp] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [activityEarlyPayIntent, setActivityEarlyPayIntent] = useState(true);
    const [companyExpectedActivity, setCompanyExpectedActivity] = useState('');
    const [earlyPayIntent, setEarlyPayIntent] = useState(true);

    const [industryValue, setIndustryValue] = useState('');
    const [industryLabel, setIndustryLabel] = useState('');
    const [businessTypeValue, setBusinessTypeValue] = useState('');
    const [businessTypeLabel, setBusinessTypeLabel] = useState('');
    const [website, setWebsite] = useState('');
    const [businessRegistration, setBusinessRegistration] = useState('');
    const [phone, setPhone] = useState('');
    const [businessNumber, setBusinessNumber] = useState('');
    const [hasTradeName, setHasTradeName] = useState(true);
    const [legalName, setLegalName] = useState('');
    const [expectedActivity, setExpectedActivity] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [emailMatch, setEmailMatch] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidEmail = regex.test(email);
        setEmailIsValid(isValidEmail);
        const isValidPassword = password.length>=6;
        setPasswordIsValid(isValidPassword);
        if(!isValidEmail || !isValidPassword) {
            return;
        }
        setEmailMatch(email===confirmEmail);
        setPasswordMatch(password===confirmPassword);
        if(email!==confirmEmail || password!==confirmPassword) {
            return;
        }
        const reqBody = {
            "user": {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "password": password,
            },
            "company": {
                "activity": {
                    "early_pay_intent": activityEarlyPayIntent,
                    "expected_activity": companyExpectedActivity,  
                },
                "early_pay_intent": earlyPayIntent,
                "industry": {
                    "value": industryValue,
                    "label": industryLabel,
                },
                "business_type": {
                    "label": businessTypeLabel,
                    "value": businessTypeValue,
                },
                "website": website,
                "business_registration": businessRegistration,
                "phone": phone,
                "business_number": businessNumber,
                "has_trade_name": hasTradeName,
                "legal_name": legalName,
                "expected_activity": expectedActivity,
            }
        };
        axios.post(BASE_URL + '/auth/signup', reqBody).then(res=>{
            console.log("Sign up resp: "+res);
            setIsSignUp(true);
        });
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmEmail = (e) => {
        setConfirmEmail(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleActivityEarlyPayIntent = (e) => {
        setActivityEarlyPayIntent(!activityEarlyPayIntent);
    }
    const handleEarlyPayIntent = (e) => {
        setEarlyPayIntent(!earlyPayIntent);
    }
    const handleCompanyExpectedActivity = (e) => {
        setCompanyExpectedActivity(e.target.value);
    }
    const handleIndustryValue = (e) => {
        setIndustryValue(e.target.value);
    }
    const handleIndustryLabel = (e) => {
        setIndustryLabel(e.target.value);
    }
    const handleBusinessTypeValue = (e) => {
        setBusinessTypeValue(e.target.value);
    }
    const handleBusinessTypeLabel = (e) => {
        setBusinessTypeLabel(e.target.value);
    }

    const handleWebsite = (e) => {
        setWebsite(e.target.value);
    }
    const handleBusinessRegistration = (e) => {
        setBusinessRegistration(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleBusinessNumber = (e) => {
        setBusinessNumber(e.target.value);
    }
    const handleHasTradeName = (e) => {
        setHasTradeName(!hasTradeName);
    }
    const handleLegalName = (e) => {
        setLegalName(e.target.value);
    }
    const handleExpectedActivity = (e) => {
        setExpectedActivity(e.target.value);
    }

    return (
        <div className="container" style={{marginTop: '10px'}}>
            <div className="border rounded-5 row align-items-center">
                <h1 style={{textAlign: 'center'}}>SignUp</h1>
                <section className="w-100 p-4 d-flex justify-content-center pb-4">
                    {/* for error message*/}
                    <form>
                        <div className="form-outline mb-2">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" onChange={handleFirstName} value={firstName}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" onChange={handleLastName} value={lastName}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor='email'>Email:</label>
                            <input type="email" name="email" id="email" onChange={handleEmail} value={email}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="confirmEmail">Confirm Email:</label>
                            <input type="email" id="confirmEmail" onChange={handleConfirmEmail} value={confirmEmail}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" onChange={handlePassword} value={password}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" id="confirmPassword" onChange={handleConfirmPassword} value={confirmPassword}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="aEarlyPayIntent">Activity Early Pay Intent</label>
                            <input type='checkbox' id="aEarlyPayIntent" onChange={handleActivityEarlyPayIntent} defaultChecked={activityEarlyPayIntent}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="cExpectedActivity">Company Expected Activity:</label>
                            <input type="text" id="cExpectedActivity" onChange={handleCompanyExpectedActivity} value={companyExpectedActivity}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="earlyPayIntent">Early Pay Intent</label>
                            <input type='checkbox' id="earlyPayIntent" onChange={handleEarlyPayIntent} defaultChecked={earlyPayIntent}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="industryValue">Industry Value:</label>
                            <input type="text" id="industryValue" onChange={handleIndustryValue} value={industryValue}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="industryLabel">Industry Label:</label>
                            <input type="text" id="industryLabel" onChange={handleIndustryLabel} value={industryLabel}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="bTypeLabel">Business Type Label:</label>
                            <input type="text" id="bTypeLabel" onChange={handleBusinessTypeLabel} value={businessTypeLabel}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="bTypeValue">Business Type Value:</label>
                            <input type="text" id="bTypeValue" onChange={handleBusinessTypeValue} value={businessTypeValue}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="website">Website:</label>
                            <input type="text" id="website" onChange={handleWebsite} value={website}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="bRegistration">Business Registration:</label>
                            <input type="text" id="bRegistration" onChange={handleBusinessRegistration} value={businessRegistration}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" id="phone" onChange={handlePhone} value={phone}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="bNumber">Business Number:</label>
                            <input type="text" id="bNumber" onChange={handleBusinessNumber} value={businessNumber}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="hasTradeName">Has Trade Name:</label>
                            <input type="checkbox" id="hasTradeName" onChange={handleHasTradeName} defaultChecked={hasTradeName}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="legalName">Legal Name:</label>
                            <input type="text" id="legalName" onChange={handleLegalName} value={legalName}/>
                        </div>
                        <div className="form-outline mb-2">
                            <label htmlFor="expectedActivity">Expected Activity:</label>
                            <input type="text" id="expectedActivity" onChange={handleExpectedActivity} value={expectedActivity}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>SIGN UP</button>
                    </form>
                </section>
                <section className="w-100 p-4 justify-content-center pb-4">
                    <div style={{color: 'red', display: emailIsValid ? 'none' : '', textAlign: 'center'}}>Email is not valid!</div>
                    <div style={{color: 'red', display: passwordIsValid ? 'none' : '', textAlign: 'center'}}>Password is not valid!</div>
                    <div style={{color: 'red', display: emailMatch ? 'none' : '', textAlign: 'center'}}>Email not match with confirm email</div>
                    <div style={{color: 'red', display: passwordMatch ? 'none' : '', textAlign: 'center'}}>Password not match with confirm password</div>
                    <div style={{display: isSignUp ? '' : 'none'}}>
                        You have signed up! You can go to <a href="/login/">login</a> page to login now.
                    </div>
                </section>
        </div>
        </div>
    );
}
export default SignUp;