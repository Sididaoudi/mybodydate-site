import React from 'react';
import '../assets/styles/style.css';
import '../assets/images/Background.png'
import { ValidationButton } from '../components/Buttons';

export const MyAccount = () => {
    return (
        <div className="secondContainer">


            <div className='title-container'>

                <h2 className="welcomeTitle">Mon compte</h2>

            </div>

            <ValidationButton />


        </div>
    );
};
