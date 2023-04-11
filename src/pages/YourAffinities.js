import React from 'react';
import '../assets/images/Background.png'

import { ContinueButton } from '../components/Buttons';
import { Affinities } from '../components/Buttons';


export const YourAffinities = () => {
    return (
        <div className="secondContainer">

            <div className='title-container'>

                <h2 className="loveCoachTitle">Vos affinités ? </h2>

            </div>

            <Affinities />

            <ContinueButton />

        </div>

    );
};
