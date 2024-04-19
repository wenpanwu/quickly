import React, {useEffect} from 'react';
function Home() {
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        window.location.href='/login';
    }
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            window.location.href='/login';
        }
    }, []);
    return (
        <div className="container" style={{marginTop: '10px'}}>
            <div className="border rounded-5 row align-items-center">
                <h3>Welcome to Quickly!</h3>
                <div>
                    <a href="/my-profile">My Profile</a>
                    <br/><br/>
                    <button className="btn btn-primary btn-block mb-4" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}
export default Home;