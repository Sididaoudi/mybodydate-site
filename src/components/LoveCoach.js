import React from 'react';
import PropTypes from 'prop-types';

class LoveCoach extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="secondContainer">
                <div className='title-container'>

                    <h2 className="loveCoachTitle">Love Coach</h2>

                </div >

                <section id='intro'>
                    <p>Nous sommes heureux de vous accompagner pour augmenter vos
                        chances de Match en vous proposant des offres personnalisées de
                        célibataires ; parent solo, etc; et des invitations aux événements près de chez
                        vous et sur sur la ville de votre choix.
                    </p>
                </section>

                <div className="btn-radio">
                    <label className='radioBtn'>
                        <input type="radio" name='answer' value='no' />
                        Non, je me débrouille.
                    </label>

                    <label className='radioBtn'>
                        <input type="radio" name='answer' value='yes' />
                        Oui, c'est parfait.
                    </label>
                </div>

                <h4>Création du compte gratuit.</h4>

                <h4>Choix unique.</h4>


            </div >

        );
    }
}

LoveCoach.propTypes = {};

export default LoveCoach;
