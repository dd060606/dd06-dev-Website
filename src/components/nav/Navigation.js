import { Component } from "react"
import "../css/Navigation.css"
import { NavLink } from "react-router-dom"
import ResponsiveButton from "./ResponsiveButton"




class Navigation extends Component {

    render() {
        return (
            <header>
                <div className="nav-content">

                    <NavLink className="title " exact activeClassName="current" to="/">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
                    </NavLink>
                    <ul>
                        <NavLink className="navlink " exact activeClassName="current" to="/">
                            <li className="navlink link-underline">Accueil</li>
                        </NavLink>
                        <NavLink className="navlink" exact activeClassName="current" to="/Skills">
                            <li className="navlink  link-underline">Compétences</li>
                        </NavLink>
                        <NavLink className="navlink" exact activeClassName="current" to="/Projects">
                            <li className="navlink  link-underline">Réalisations</li>
                        </NavLink>


                        <a href="https://github.com/dd060606" rel="noopener noreferrer" target="_blank"><li className="external-link link-underline">GitHub</li></a>
                    </ul>
                    <div>
                        <ResponsiveButton />
                    </div>


                </div>

            </header >)
    }
}

export default Navigation