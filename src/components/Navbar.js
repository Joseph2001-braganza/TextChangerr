import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} shadow bg-${props.mode}`} style={{ fontFamily: "sans-serif" }}>
            <div className="container-fluid">
                <a className={`navbar-brand fw-bold fs-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} href="https://www.title.com">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active fw-normal" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-normal" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-normal" id="navbarDropdown" href="https://www.more.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MORE
                            </a>
                            <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-warning" href="https://www.learn.com">Learn</a></li>
                                <li><a className="dropdown-item text-warning" href="https://www.youtube.com/">Youtube</a></li>
                                <li><a className="dropdown-item text-warning" href="https://www.google.com/search">Google</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" action="https://www.google.co.in/search" autocomplete="off" target="_blank">
                        <input className={`form-control  bg-${props.mode === 'light' ? 'light ' : 'secondary text-light'}`} type="search" placeholder="Find Article" aria-label="Search" name="q" />
                        <button className="btn btn-outline-danger ms-2 bg-light" type="submit">Search</button>
                    </form>
                    <div className="form-check form-switch ms-3">
                        <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.switch1}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'JOSE:)'
};