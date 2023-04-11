import React from 'react';
import '../assets/images/Background.png'

import { Goals } from '../components/Buttons';
import { ContinueButton } from '../components/Buttons';



export const YourGoals = () => {
    return (
        <div className="secondContainer">

            <div className='title-container'>

                <h2 className="loveCoachTitle">Vos objectifs ? </h2>

            </div>

            <Goals />
            <ContinueButton />

        </div>

    );
};
