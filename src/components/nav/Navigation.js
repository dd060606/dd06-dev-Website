import { Component } from "react"
import "../css/Navigation.css"
import { NavLink, withRouter } from "react-router-dom"
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
                        <NavLink className="navlink link-underline " exact to="/">Accueil</NavLink>
                        <li className="navlink  link-underline" onClick={() => {
                            this.props.history.push("/")
                            setTimeout(() => {
                                document.querySelector('.skills').scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }, 200)

                        }}>Compétences</li>
                        <NavLink className="navlink  link-underline" exact to="/res">Réalisations</NavLink>


                        <a href="https://github.com/dd060606" rel="noopener noreferrer" target="_blank"><li className="external-link link-underline">GitHub</li></a>
                    </ul>
                    <div>
                        <ResponsiveButton />
                    </div>


                </div>

            </header >)
    }
}

export default withRouter(Navigation)