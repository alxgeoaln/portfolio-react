import React, {Component} from 'react';
import Project from './Project';
import pointTaxi from '../../assets/projects-logo/pointtaxi.png';

class Projects extends Component {

    render() {
        return (
            <div>
                <div id="projects">
                    <div className="row text-center">
                        <div className="col-md-12">
                        <h3 className="title">Projects</h3>
                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className="col-md-6">
                            <Project/>
                        </div>
                        <div className='col-md-6'>
                        </div>
                    </div>
                    </div>
            <hr/>
            </div>
        )
    }

}

export default Projects;