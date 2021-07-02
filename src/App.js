import './App.css'
import { Component } from 'react'
import Grow from '@material-ui/core/Grow'
import Slide from "@material-ui/core/Slide"
import Skills from './components/Skills'
import React from 'react'


class App extends Component {

    state = {
        skillsMarginTop: 0
    }

    componentDidMount() {

        this.setState({ skillsMarginTop: window.innerHeight - document.querySelector(".intro").offsetHeight })
    }

    render() {
        const { skillsMarginTop } = this.state
        return (
            <div>
                <div className="intro">
                    <Grow in={true} timeout={500}>

                        <div className="titles">

                            <h2>dd06 - Développement</h2>
                            <h3>Bienvenue sur mon site !</h3>
                            <h4>Développement Web et de logiciels </h4>
                            <button onClick={() => {
                                document.querySelector('.skills').scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}>En savoir plus</button>
                        </div>
                    </Grow>

                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={600}>

                        <img src={`${process.env.PUBLIC_URL}/assets/images/developper.jpg`} alt="developper-img" />
                    </Slide>

                </div>
                <Skills marginTop={skillsMarginTop} />



            </div >
        )
    }

}

export default App
