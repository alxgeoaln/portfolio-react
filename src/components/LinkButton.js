import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const LinkButton = ({to, buttonName, style}) => (
    <Link
        style = {style}
        to={to}
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={500}
        isDynamic={true}>
            {buttonName}
    </Link>
);

export default LinkButton;