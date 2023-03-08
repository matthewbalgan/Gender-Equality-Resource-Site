import React from 'react';
export default function Home(props) {
    return (
        <div className='container-home'>
            <div>
            <img src="IntroPhoto.png" alt="Group of Women Smiling" className='header-photo'></img>
                <h1>
                    Introduction
                </h1>
            </div>
            <div className='paragraph-one'>
                <p className='text'>
                Welcome to our gender equality web application!
                Our goal is to provide users with an interactive map that showcases gender wage gap statistics across the United States,
                an industry based wage statistics graph,
                as well as a comprehensive directory of gender equality organizations.
                We believe that it's crucial to raise awareness about gender inequality and
                to provide resources for people who want to get involved and make a difference.
                Our application is designed to be user-friendly and informative, and we hope it will
                 inspire you to take action and join the movement toward gender equality.

                </p>
                <div className='img-box'>
                    <iframe id='video-1' title='UN SDG video' src="https://www.youtube.com/embed/kirtWKKAPNs"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture; web-share; fullscreen" ></iframe>

                </div>
            </div>
            <div className='paragraph-two'>
                <p className='text'>
                Gender equality is an essential issue that affects people of all genders, ages, and backgrounds.
                Despite significant progress in recent years, we still have a long way to go in achieving true gender
                equality. Our web application is designed to be a hub of information and resources for people who want
                to learn more about this critical issue and get involved in the fight for gender equality. With an
                interactive map that showcases gender wage gap statistics and a comprehensive directory of gender equality
                organizations, our application provides users with the tools and information they need to take action and
                make a difference.
                </p>
                <div className='img-box'>
                    <iframe id='video-2' title='UN Gender Equality Vid' src="https://www.youtube.com/embed/ZC9jdhi6xgA"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                        picture-in-picture; web-share; fullscreen" ></iframe>
                </div>
            </div>
        </div>
    );
};