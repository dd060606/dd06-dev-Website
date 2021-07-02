import './css/LatestProjects.css'
import { Component } from 'react'
import Slide from "react-reveal/Slide"
import Button from "@material-ui/core/Button"

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
                            <img src={`${process.env.PUBLIC_URL}/assets/images/projects/opm_0.png`} />
                            <h3>OpenPasswordManager</h3>
                            <p>Un gestionnaire de mots de passe gratuit et open-source</p>
                            <Button >Afficher</Button>
                        </div>
                    </Slide>

                </div>
                <Button >Tout afficher</Button>


            </section >
        )
    }

}

export default LatestProjects
