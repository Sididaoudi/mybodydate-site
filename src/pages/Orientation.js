import React from 'react';
import '../assets/images/Background.png'

import { ContinueButton } from '../components/Buttons';
import { OrientationBtn } from '../components/Buttons';


export const YourOrientation = () => {
    return (
        <div className="secondContainer">

            <div className='title-container'>

                <h2 className="loveCoachTitle">Votre orientation ? </h2>

            </div>

            <OrientationBtn />

            <ContinueButton />
        </div>

    );
};
