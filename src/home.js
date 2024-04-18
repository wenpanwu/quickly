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
        <div>
            <div>Hello From Quickly!</div>
            <div>
                <a href="/my-profile">My Profile</a>
                <br/>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Home;