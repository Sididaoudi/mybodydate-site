import React from 'react';
import '../assets/images/Background.png'

import { RelationShip } from '../components/Buttons';
import { ContinueButton } from '../components/Buttons';



export const Relation = () => {
    return (
        <div className="secondContainer">

            <div className='title-container'>

                <h2 className="loveCoachTitle">Votre recherche ? </h2>

            </div>

            <RelationShip />

            <ContinueButton />

        </div>

    );
};
