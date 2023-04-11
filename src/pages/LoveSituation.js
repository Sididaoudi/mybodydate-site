import React from 'react';
import '../assets/images/Background.png'
import { LoveSituationBtn } from '../components/Buttons';
import { ContinueButton } from '../components/Buttons';


export const LoveSituation = () => {
    return (
        <div className="secondContainer">

            <div className='title-container'>

                <h2 className="loveCoachTitle">Votre situation actuelle ? </h2>

            </div>

            <LoveSituationBtn />

            <ContinueButton />
        </div>

    );
};
