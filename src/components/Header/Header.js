import React, {Component} from 'react';
import './Header.css';
import logo from '../../assets/logo/logo.svg';
import LinkButton from './../LinkButton';

class Header extends Component {

    state = {
        scrollNumber: 0 
    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            const number = window.pageYOffset;
            this.setState({
                scrollNumber: number
            })
        });
    }

    render() {
        return (
            <div id="navigation" style={this.state.scrollNumber > 230 ? styles.hideHeader : styles.showHeade} className="header clearfix navbar-fixed-top header-container">
                <nav style={{marginTop: '10px'}}>
                    <ul className="nav nav-pills pull-right">
                    <li className="nav-button" style={{cursor: 'pointer'}}>
                    <LinkButton to={'projects'} buttonName='Projects' />
                    </li>
                    
                    <li className="nav-button" style={{cursor: 'pointer'}}>
                    <LinkButton to={'contact'} buttonName='Contact'  />
                    </li>
                    </ul>
                </nav>
                <a href="/">
                    <img  className="my-logo" src={logo} alt="logo"/>
                </a>
                <hr style={{marginBottom: "0px"}}/>
                </div>

        )
    }
}

const styles = {
    hideHeader: {
        transform: 'translateY(-150%)',
        transition: 'all 1s ease'
    },
    showHeade: {
        transform: 'translateZ(0)',
        transition: 'all 1s ease'
    }
}

export default Header;