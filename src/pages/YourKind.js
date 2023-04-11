import React from 'react';
import '../assets/images/Background.png'
import { GenderButtons } from '../components/Buttons';

export const YourKind = () => {
    return (
        <div className="secondContainer">

            <div className='title-container'>

                <h2 className="loveCoachTitle">Votre Genre ? </h2>

            </div>

            <GenderButtons />

        </div>

    );
};
