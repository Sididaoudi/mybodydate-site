import React from 'react';
import welcomeImage from '../assets/images/Welcome.jpg';
import otherImage from '../assets/images/Background-Web.png';
import '../assets/styles/style.css';

function Images(props) {
    return (
        <div className="secondContainer">
            <div className='img'>
                <img src={welcomeImage} className='img-index' alt={props.alt} />
            </div>
            <div className='img'>
                <img src={otherImage} className='img-index' alt={props.alt} />
            </div>
        </div>
    );
}

export default Images;