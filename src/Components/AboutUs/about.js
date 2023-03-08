import React from 'react';
export default function About(props) {
    return (
        <div className='about-container' id='about-us'>
            <h1>
                About us
            </h1>
            <div className="card-container">
                <div className="card">
                    <img src="cameron.jpeg" alt="Photo of Cameron"></img>
                    <h3>Cameron Rezak</h3>
                    <p className="title">Project Manager</p>
                    <p className='descript'>Cameron is an undergraduate student in the University of Washington's Informatics program. He aspires to make an impact through technology with a human purpose.</p>
                </div>
                <div className="card">
                    <img src="Jacob.jpg" alt="photo of Jacob"></img>
                    <h3>Jacob Kim</h3>
                    <p className="title">Product Manager</p>
                    <p className='descript'>Jacob is an undergraduate student in the University of Washington's Informatics program. He has a strong interest in product management and data analytics.</p>
                </div>
                <div className="card">
                    <img src="matt.jpg" alt="photo of Matt"></img>
                    <h3>Matthew Balgan</h3>
                    <p className="title">Software Developer</p>
                    <p className='descript'>Matt is an undergraduate student in the University of Washington's Informatics program. He is aiming to become a software developer in the near future.</p>
                </div>
                <div className="card">
                    <img src="ruolin.jpg" alt="photo of Ruolin"></img>
                    <h3>Ruolin Chen</h3>
                    <p className="title">UX Designer</p>
                    <p className='descript'>Ruolin is an undergraduate student at UW. She wants to continue her study in Human-Computer Interaction and aiming to become a Strategic Researcher in the future.</p>
                </div>
                <div className="card">
                    <img src="matthewh.jpg" alt="Photo of Matthew"></img>
                    <h3>Matthew Herradura</h3>
                    <p className="title">Software Developer</p>
                    <p className='descript'>Short Bio or DescriptionShort Bio or DescriptionShort Bio or DescriptionShort Bio or DescriptionShort Bio or DescriptionShort Bio or DescriptionShort Bio or DescriptionShort Bio or DescriptionShort Bio or DescriptionShort Bio or Description</p>
                </div>
            </div>
        </div>
    )

};