
import React from 'react';
import "../css/ResponsiveNav.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink, useHistory } from "react-router-dom"
import { setMenuOpen } from "./ResponsiveButton"


const ResponsiveNav = ({ open }) => {
    const isResponsive = useMediaQuery('(max-width: 1030px)');
    const history = useHistory()
    return (
        <ul className="responsive-nav-ul" open={open} style={{ transform: open ? 'translateX(0)' : 'translateX(100%)', display: isResponsive ? "flex" : "none" }}>
            <NavLink className="responsive-navlink " style={{ marginBottom: 0 }} exact to="/" onClick={() => setMenuOpen(false)}>
                <li className="responsive-navlink"><i className="fad fa-home"></i>Accueil</li>
            </NavLink>

            <li className="responsive-navlink" onClick={() => {
                setMenuOpen(false)
                history.push("/")
                setTimeout(() => {
                    document.querySelector('.skills').scrollIntoView({
                        behavior: 'smooth'
                    })
                }, 1000)

            }}><i className="fad fa-code"></i>Compétences</li>



            <NavLink className="responsive-navlink" exact to="/Portfolio" onClick={() => setMenuOpen(false)}>
                <li className="responsive-navlink"><i className="fad fa-laptop-code"></i>Réalisations</li>
            </NavLink>
            <a href="https://github.com/dd060606" rel="noopener noreferrer" className="responsive-navlink" target="_blank"><li className="responsive-navlink"><i className="fab fa-github"></i>GitHub</li></a>


        </ul>
    )
}

export default ResponsiveNav