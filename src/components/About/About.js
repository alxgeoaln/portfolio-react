import React, {Component} from 'react';
import './About.css';
import Typed from 'typed.js';
import LinkButton from './../LinkButton';
import me from "./../../assets/me3.jpg";



class About extends Component {

    componentDidMount() {
        const options = {
            strings: ["Web", "Mobile"],
            typeSpeed:200,
            backSpeed:100,
            backDelay: 500,
            loop:true,
            cursorChar: '<span style="color: #EDB83D">|</span>',
        }

        this.typed = new Typed(this.el, options);
    }

    render() {
        return(
            <div>
                <div className="text-center" style={{marginTop: "100px"}}>
                    <h1 className="intro-text">Hi, I'm Alin. I build <br/> <span id='typed' ref={(el) => this.el = el}></span> applications</h1>
                </div>
                <br/>
                <div id="about">
                <div className="row text-center">
                    <div className="col-md-12">
                    <h3 className="title">About</h3>
                        <p>I currently work as a Software Engineer at Luxoft, 
                        the place where I consume my passion for development 
                        and I am also student in my first year of master’s 
                        degree learning Intelligent Transport Systems. 
                        You can check my work history on  <a className="link-button" href="https://www.linkedin.com/in/georgian-alin-alexandru-5ab995119/">LinkedIn</a>.
                        Outside of work, I like to hang out with my friends and travel. 
                        If you have a project to be done, don't hesitate to <LinkButton to={'contact'} buttonName='contact me' style={{color: '#EDB83D', cursor: 'pointer'}} /> and get a coffee.</p>
                    <img src={me} style={{maxHeight: '600px'}} className="img-responsive img-thumbnail center-image" alt="Alin Alexandru"/>
                    </div>
                </div>
                </div>
                <br/>
            </div>
        )
    }
}


export default About;