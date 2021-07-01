import './css/Error404.css'
import { Component } from "react"

class Error404 extends Component {


    render() {
        return (
            <div className="error404">
                <h1>Erreur 404</h1>
                <p>Page non trouvée !</p>
            </div>
        )
    }
}

export default Error404