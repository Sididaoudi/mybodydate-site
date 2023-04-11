import React, { useState, useEffect } from 'react';

import '../assets/styles/style.css';

// --------------------Footer-------------------------------------------
import Footer from '../components/Footer';

import Images from '../components/Images';

export const Index = () => {
  return (
    <div className="secondContainer">


      <div className='title-container'>

        <h2 className="title">Un coup de coeur n'attend pas </h2>

        <h3 className="subtitle">Ne perdez plus rien...</h3>

      </div>
      <Images />

      <div className="btn-container">

        <button className="button"><a href="/Registration">S'inscrire</a></button>

        <button className="btn"><a href="/Login">Se connecter</a></button>

      </div>

      <Footer />

    </div>
  );
};
