import React, {Component} from 'react';
import './Footer.css';

import logo from '../../assets/logo/logo.svg';
import fbLogo from '../../assets/facebook.svg';
import liLogo from '../../assets/linkedin.svg';

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="text-center">
                <div className="row">
                    <img style={{width: '40px'}} src={logo} alt="logo"/>
                </div>
                <p style={{marginTop: "5px"}}>Handmade by me 2018.</p>
                <br/>
                <div id="social-media">
                    <a href="https://www.facebook.com/georgian.alin.77?ref=bookmarks">
                    <img src={fbLogo} style={{width: '35px', margin: '2px'}} alt="facebook"/>
                    </a>
                    <a href="https://www.linkedin.com/in/georgian-alin-alexandru-5ab995119/">
                    <img src={liLogo} style={{width: '35px', margin: '2px'}} alt="facebook"/>
                    </a>
                </div>
            </div>

        )
    }
}

export default Footer;