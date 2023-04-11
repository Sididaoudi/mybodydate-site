import React from 'react';
import '../assets/styles/style.css';
import '../assets/images/Background.png'
import PhotoGallery from '../components/PhotoGallery';


export const Discover = () => {
    return (
        <div className="secondContainer">

            <div className='title-container'>

                <h2 className="discoverTitle">Trouvez votre match parfait sur Mybodydate pour l'amour,
                    l'amitié et les affaires</h2>

            </div>

            <PhotoGallery />

        </div>

    );
};
