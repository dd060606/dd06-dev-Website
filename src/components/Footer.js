import './css/Footer.css'
import { Component } from 'react'

class Footer extends Component {

    render() {

        return (
            <footer>

                <div className="contact">
                    <h3>Contact : </h3>
                    <a href="https://github.com/dd060606" target="_blank" rel="noreferrer"> <i className="fab fa-github"></i> dd060606</a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><img alt="discord" src={`${process.env.PUBLIC_URL}/assets/images/discord.png`} width={18} /> dd_06#0759</a>
                </div>

                <p className="copyright">dd06-dev 2021 © Tout droits réservés</p>
            </footer>
        )
    }

}

export default Footer
