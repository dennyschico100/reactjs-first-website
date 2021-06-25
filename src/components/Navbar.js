import React, { useState, useEffect, useRef } from "react"
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    const [closeMobileMenu, setCloseMobileMenu] = useState(false)

    const handleMenuIcon = () => {
        setMenuIcon(!menuIcon)
    }
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" >
                        ROBOX <i className="fab  fa-typo3"></i>

                    </Link>
                    <div className="menu-icon" onClick={handleMenuIcon} >
                        <i className={menuIcon ? 'fas fa-times' : 'fa fa-bars'} />
                       
                    </div>
                    <ul className={menuIcon ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}  >
                                    Inicio 
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}  >
                                    Plataforma
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}  >
                                    Novedades
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}  >
                                    A cerca de
                                </Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}  >
                                    Contactanos
                                </Link>
                                
                            </li>
                            
                            
                        </ul>


                </div>
            </nav>

        </React.Fragment>
    )
}

export default Navbar;