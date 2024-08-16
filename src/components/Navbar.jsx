import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://i.ytimg.com/vi/E5pPNBkSCIo/sddefault.jpg" width="30" height="30" className="d-inline-block align-top rounded-circle" alt="Swiggy logo" />
                        <span> Food <span className='text-danger'>Delight</span></span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link" to="/"><i className="bi bi-tag"></i> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/offer"><i className="bi bi-tag"></i> Offers <sup className="text-danger">NEW</sup></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/help"><i className="bi bi-question-circle"></i> Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search"><i className="bi bi-question-circle"></i> Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"><i className="bi bi-question-circle"></i> Contact Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/signin"><i className="bi bi-person"></i> Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><i className="bi bi-cart"></i> Cart (0)</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;