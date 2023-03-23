import React from 'react';
import logo from '../../assets/mLogo-removebg-preview.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">

                    <a class="navbar-brand text-primary fw-semibold fs-4" href="/Home">
                        <img src={logo} alt="Logo" width="34" height="36"  class="d-inline-block align-text-top rounded-circle me-2"/>
                            Rest Countries
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <a className="nav-link active text-primary fw-semibold" aria-current="page" href="/link">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active text-primary fw-semibold" aria-current="page" href="/link">About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active text-primary fw-semibold" aria-current="page" href="/link">Contract Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;