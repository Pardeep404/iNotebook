import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    let history = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history("/login");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light">
            <div className="container-fluid">
                <Link className={`navbar-brand`} aria-current="page" to="/home">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/home"? "active": ""}`} aria-current="page" to="/home">Home</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} aria-current="page" to="/about">About</Link>
                        </li> */}
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex" role="search">                        
                        <Link className="btn btn-dark mx-1" to="/login" variant="contained" color="primary" role="button"><i class="fa fa-sign-in" aria-hidden="true"></i></Link>
                        <Link className="btn btn-dark mx-1" to="signup" variant="contained" color="primary" role="button"><i class="fa fa-user-plus" aria-hidden="true"></i></Link>
                    </form>: <button className="btn btn-dark" onClick={handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i></button> }
                </div>
            </div>
        </nav>
    );
};
