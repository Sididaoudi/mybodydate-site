import React from 'react';
import '../assets/styles/style.css';
import '../assets/images/Background.png'
import LoveCoach from '../components/LoveCoach';


export const Welcome = () => {
    return (
        <div className="secondContainer">


            <div className='title-container'>

                <h2 className="welcomeTitle">Bienvenue, découvrez-nous.</h2>

            </div>

            <div className="video-container">

            </div>

            <LoveCoach />

        </div>
    );
};
