import './css/Skills.css'
import { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import Slide from "react-reveal/Slide"


class Skills extends Component {



    render() {
        return (
            <section className="skills" id="skills" style={{ marginTop: this.props.marginTop }}>

                <div className="skills-title">
                    <i className="far fa-code skills-logo"></i>
                    <h1>Compétences</h1>
                </div>

                <div className="skills-box">
                    <Slide left duration={600}>
                        <div className="skill-box">
                            <i className="far fa-globe" />
                            <h2> Web</h2>
                            <div className="line" />
                            <h3>Langages</h3>
                            <div className="language-box">
                                <Tooltip title="HTML 5" aria-label="html-5" placement="top">
                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/html5.png`} alt="html5" width={30} />

                                    </div>
                                </Tooltip>
                                <Tooltip title="CSS 3" aria-label="css-3" placement="top">
                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/css3.png`} alt="css3" width={30} />

                                    </div>
                                </Tooltip>
                                <Tooltip title="JavaScript" aria-label="javascript" placement="top">

                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/js.png`} alt="js" width={30} />

                                    </div>
                                </Tooltip>
                                <Tooltip title="NodeJS" aria-label="nodejs" placement="top">

                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/nodejs.png`} alt="nodejs" width={45} />

                                    </div>
                                </Tooltip>

                            </div>

                            <div className="line" />
                            <h3>Frameworks</h3>

                            <div className="language-box">
                                <Tooltip title="React" aria-label="react-js" placement="top">
                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/reactjs.png`} alt="reactjs" width={60} />

                                    </div>
                                </Tooltip>
                                <Tooltip title="Express" aria-label="express-js" placement="top">
                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/expressjs.png`} alt="expressjs" width={47} />

                                    </div>
                                </Tooltip>

                            </div>


                        </div>

                    </Slide>
                    <Slide right duration={600}>

                        <div className="skill-box">
                            <i className="far fa-laptop-code"></i>
                            <h2> Programmes</h2>
                            <div className="line" />
                            <h3>Langages</h3>
                            <div className="language-box">
                                <Tooltip title="C++" aria-label="c++" placement="top">
                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/c++.png`} alt="c++" width={30} />

                                    </div>
                                </Tooltip>
                                <Tooltip title="Java" aria-label="java" placement="top">
                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/java.png`} alt="java" width={25} />

                                    </div>
                                </Tooltip>
                                <Tooltip title="Python" aria-label="python" placement="top">

                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/python.png`} alt="python" width={30} />

                                    </div>
                                </Tooltip>
                                <Tooltip title="MySQL" aria-label="mysql" placement="top">

                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/mysql.png`} alt="mysql" width={30} />

                                    </div>
                                </Tooltip>

                            </div>


                            <div className="line" />
                            <h3>Frameworks</h3>

                            <div className="language-box">
                                <Tooltip title="Qt" aria-label="qt" placement="top">
                                    <div className="language">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/languages/qt.png`} alt="qt" width={30} />

                                    </div>
                                </Tooltip>

                            </div>


                        </div>
                    </Slide>

                </div>




            </section >
        )
    }

}

export default Skills
