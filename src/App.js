import './App.css'
import { Component } from 'react'
import Grow from '@material-ui/core/Grow'
import Slide from "@material-ui/core/Slide"
import Skills from './components/Skills'
import React from 'react'



class App extends Component {

    render() {

        return (
            <div>

                <div className="intro">
                    <Grow in={true} timeout={500}>

                        <div className="titles">

                            <h2>dd06 - Développement</h2>
                            <h3>Bienvenue sur mon site !</h3>
                            <h4>Développement Web et Logiciels </h4>
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

                <Skills className="test-skills" />



            </div >
        )
    }

}

export default App
