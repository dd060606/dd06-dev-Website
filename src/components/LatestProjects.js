import './css/LatestProjects.css'
import { Component } from 'react'
import Slide from "react-reveal/Slide"
import Button from "@material-ui/core/Button"
import { withRouter } from 'react-router-dom'

class LatestProjects extends Component {



    render() {
        return (
            <section className="latest-projects">

                <Slide top duration={600} cascade>
                    <div className="titles">
                        <i className="far fa-briefcase latest-projects-logo"></i>
                        <h1>Dernières réalisations</h1>
                    </div>
                </Slide>

                <div className="projects-cards">
                    <Slide bottom duration={600} >

                        <div className="project-card">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/projects/opm_0.png`} alt="project-img" />
                            <h3>OpenPasswordManager</h3>
                            <p>Un gestionnaire de mots de passe gratuit et open-source</p>
                        </div>
                    </Slide>

                </div>

                <Button onClick={() => this.props.history.push("/Portfolio")}>Tout afficher</Button>


            </section >
        )
    }

}

export default withRouter(LatestProjects)
