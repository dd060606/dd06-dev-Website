import './App.css'
import { Component } from 'react'
import Grow from '@material-ui/core/Grow'


class App extends Component {

  render() {

    return (
      <div>

        <div className="intro">
          <Grow in={true} timeout={1000}>

            <div className="titles">

              <h2>dd06 - Développement</h2>
              <h3>Bonjour, je suis dd_06</h3>
              <h4>Développement Web et Logiciels </h4>
              <a href="#skills">En savoir plus</a>
            </div>
          </Grow>

          <img src={`${process.env.PUBLIC_URL}/assets/images/developper.jpg`} alt="developper-img" />
        </div>


      </div>
    )
  }

}

export default App
