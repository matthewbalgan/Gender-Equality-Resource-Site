import React from 'react';


export default function Nav(props) {
    return(
        <nav>
            <img className="logo" src="logo.png" alt='Group of 8 women taking a photo together' />
            <ul>
                <li><a className="navigator" href="/Home">Introduction</a></li>
                <li>|</li>
                <li><a className="navigator" href="#interactive-map">Interactive Map</a></li>
                <li>|</li>
                <li><a className="navigator" href="#get-involved">Get Involved</a></li>
                <li>|</li>
                <li><a className="navigator" href="#about-us">About Us</a></li>
            </ul>
        </nav>
    )
    };