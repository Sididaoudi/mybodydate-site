import React from 'react';
import '../assets/styles/style.css';
import '../assets/images/Background.png'
import { ContinueButton } from '../components/Buttons';
import { LifestyleBtn } from '../components/Buttons';

export const Lifestyle = () => {
    return (
        <div className="secondContainer">


            <div className='title-container'>

                <h2 className="welcomeTitle">Votre rythme de vie ?</h2>

            </div>

            <LifestyleBtn />

            <ContinueButton />


        </div>
    );
};
