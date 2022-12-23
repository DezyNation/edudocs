import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">Edulec Documentation</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Frontend
                    </a>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Backend
                    </a>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/backend/courses">Courses</Link></li>
                    <li><Link className="dropdown-item" to="/backend/topics">Topics</Link></li>
                    <li><Link className="dropdown-item" to="/backend/lessons">Lessons</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className="dropdown-item" to="#">Users</Link></li>
                    <li><Link className="dropdown-item" to="#">Affiliate</Link></li>
                    <li><Link className="dropdown-item" to="#">Job Portal</Link></li>
                    <li><Link className="dropdown-item" to="#">Corporate Subscription</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link className="dropdown-item" to="/backend/storage-and-streaming">Storage & Streaming</Link></li>
                    </ul>
                </li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar