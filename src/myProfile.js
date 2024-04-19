import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyProfile() {
    const [profileInfo, setProfileInfo] = useState({});
    const BASE_URL = "https://api-dev.quicklyinc.com";
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            window.location.href='/unauthorized.html';
            return;
        }

        axios.get(BASE_URL + '/auth/user',
        { headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}}
        ).then(res=>{
            console.log("resp="+res);
            setProfileInfo(res.data.user);
        });
    }, []);
    return (
        <div className="container" style={{marginTop: '10px'}}>
            <div className="border rounded-5 row align-items-center">
                <h3>{profileInfo.full_name} Profile Info:</h3>
                <h5>Company:</h5>
                <div>
                    <dl>
                        <dt>Name:</dt>
                        <dd>{profileInfo.Company && profileInfo.Company.name}</dd>
                        <dt>Legal Name:</dt>
                        <dd>{profileInfo.Company && profileInfo.Company.legal_name}</dd>
                        <dt>Phone:</dt>
                        <dd>{profileInfo.Company && profileInfo.Company.phone}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
export default MyProfile;