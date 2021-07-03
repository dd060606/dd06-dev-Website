import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Error404 from "./components/Error404"
import Navigation from "./components/nav/Navigation"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/" component={Error404} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

