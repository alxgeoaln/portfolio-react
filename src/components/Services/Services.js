import React, {Component} from 'react';

class Services extends Component {
    render() {
        return (
            <div id="services">
                <div className="row text-center">
                    <h3 className="title">Services</h3>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <i className="fa fa-code fa-4x flash-yellow" aria-hidden="true"></i>
                        <h4 className="sub-title">FRONT END DEVELOPMENT</h4>
                        <p style={{textAlign: "justify"}}>
                            Building out visual concepts of a website. Using HTML, CSS and JavaScript Frameworks, I can build fast and interactive websites. I also can bring to life your ideas about mobile apps using React Native, a cross-platform technology.
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <i className="fa fa-cogs fa-4x flash-yellow" aria-hidden="true"></i>
                        <h4 className="sub-title">BACK END DEVELOPMENT</h4>
                        <p style={{textAlign: "justify"}}>
                        The Back End is the engine that holds up a web app or a mobile app. Using NodeJS with a SQL or NO-SQL Database, I can build
                        an app front to back.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;