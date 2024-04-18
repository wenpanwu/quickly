import { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const BASE_URL = "https://api-dev.quicklyinc.com";
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [submitted, setSubmitted] = useState(false);
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
        if(!emailMatch || !passwordMatch) {
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
        setSubmitted(true);
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleConfirmEmail = (e) => {
        setConfirmEmail(e.target.value);
        setSubmitted(false);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
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
        <div>
            <h1>SignUp</h1>
            {/* for error message*/}
            <div style={{color: 'red', display: emailIsValid ? 'none' : ''}}>Email is not valid</div>
            <div style={{color: 'red', display: passwordIsValid ? 'none' : ''}}>Password is not valid</div>
            <div style={{color: 'red', display: emailMatch ? 'none' : ''}}>Email not match with confirm email</div>
            <div style={{color: 'red', display: passwordMatch ? 'none' : ''}}>Password not match with confirm password</div>
            <div style={{display: submitted ? '' : 'none'}}>
                User submitted successfully!
            </div>
            <div style={{display: isSignUp ? '' : 'none'}}>
                You have signed up! You can go to <a href="/login/">login</a> page to login now.
            </div>
            <form>
                <label>First Name</label>
                <input type="text" onChange={handleFirstName} value={firstName}/>
                <br/>
                <label>Last Name</label>
                <input type="text" onChange={handleLastName} value={lastName}/>
                <br/>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" onChange={handleEmail} value={email}/>
                <br/>
                <label>Confirm Email</label>
                <input type="email" onChange={handleConfirmEmail} value={confirmEmail}/>
                <br/>
                <label>Password</label>
                <input type="password" onChange={handlePassword} value={password}/>
                <br/>
                <label>Confirm Password</label>
                <input type="password" onChange={handleConfirmPassword} value={confirmPassword}/>
                <br/>
                <label>Activity Early Pay Intent</label>
                <input type='checkbox' onChange={handleActivityEarlyPayIntent} defaultChecked={activityEarlyPayIntent}/>
                <br/>
                <label>Company Expected Activity</label>
                <input type="text" onChange={handleCompanyExpectedActivity} value={companyExpectedActivity}/>
                <br/>
                <label>Early Pay Intent</label>
                <input type='checkbox' onChange={handleEarlyPayIntent} defaultChecked={earlyPayIntent}/>
                <br/>
                <label>Industry Value</label>
                <input type="text" onChange={handleIndustryValue} value={industryValue}/>
                <br/>
                <label>Industry Label</label>
                <input type="text" onChange={handleIndustryLabel} value={industryLabel}/>
                <br/>
                <label>Business Type Label</label>
                <input type="text" onChange={handleBusinessTypeLabel} value={businessTypeLabel}/>
                <br/>
                <label>Business Type Value</label>
                <input type="text" onChange={handleBusinessTypeValue} value={businessTypeValue}/>
                <br/>
                <label>Website</label>
                <input type="text" onChange={handleWebsite} value={website}/>
                <br/>
                <label>Business Registration</label>
                <input type="text" onChange={handleBusinessRegistration} value={businessRegistration}/>
                <br/>
                <label>Phone</label>
                <input type="text" onChange={handlePhone} value={phone}/>
                <br/>
                <label>Business Number</label>
                <input type="text" onChange={handleBusinessNumber} value={businessNumber}/>
                <br/>
                <label>Has Trade Name</label>
                <input type="checkbox" onChange={handleHasTradeName} value={hasTradeName}/>
                <br/>
                <label>Legal Name</label>
                <input type="text" onChange={handleLegalName} value={legalName}/>
                <br/>
                <label>Expected Activity</label>
                <input type="text" onChange={handleExpectedActivity} value={expectedActivity}/>
                <br/>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
export default SignUp;