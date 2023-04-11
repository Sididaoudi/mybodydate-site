import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

function GenderButtons(props) {
  return (
    <div className="gender-buttons">
      <Button className="woman-button" text="Femme" />
      <Button className="man-button" text="Homme" />
      <Button className="non-binary-button" text="Non Binaire" />
    </div>
  );
}

class ContinueButton extends React.Component {
  render() {
    return (
      <div>
        <button className="continue-button" onClick={this.props.onClick}>
          Continuer
        </button>
      </div>
    );
  }
}

ContinueButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// Validation Btn
class ValidationButton extends React.Component {
  render() {
    return (
      <div>
        <button className="validate-button" onClick={this.props.onClick}>
          Valider
        </button>
      </div>
    );
  }
}

ValidationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

class OrientationBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="orientation">
        <button className="hetero-button" onClick={this.props.onClick}>
          Hétérosexuel.le
        </button>
        <button className="homo-button" onClick={this.props.onClick}>
          Homosexuel.le
        </button>
        <button className="bi-button" onClick={this.props.onClick}>
          Bisexuel.le
        </button>
      </div>
    );
  }
}

OrientationBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

class LoveSituationBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loveSituation">
        <Button
          className="single-button"
          text="Célibataire"
        />
        <Button
          className="separated-button"
          text="Séparé(e)"
        />
        <Button
          className="divorced-button"
          text="Divorcé(e)"
        />
        <Button
          className="widower-button"
          text="Veuf(ve)"
        />
        <Button
          className="complicated-button"
          text="C'est compliqué"
        />
      </div>
    );
  }
}

LoveSituationBtn.propTypes = {
  // Définit les types des props attendues par la composante
  // Aucune prop n'est attendue dans ce cas
};

// Recherche

class ResearchBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="research">
        <Button
          className="reserchMan-button"
          text="Homme"
        />
        <Button
          className="researchWoman-button"
          text="Femme"
        />
        <Button
          className="everybody-button"
          text="Tout le monde"
        />
      </div>
    );
  }
}

ResearchBtn.propTypes = {};

// RelationShip

class RelationShip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="relationShip">
        <Button
          className="serious-relationship-button"
          text="Relation sérieuse"
        />
        <Button
          className="long-term-button"
          text="Long terme, OK pour court"
        />
        <Button
          className="short-term-button"
          text="Court terme, OK pour long"
        />
        <Button
          className="nothing-serious-button"
          text="Rien de très sérieux"
        />
        <Button
          className="friends-button"
          text="A me faire des amis.es"
        />
        <Button
          className="professional-button"
          text="Développer mon réseau professionnel"
        />
        <Button
          className="dont-know-button"
          text="Je sais pas trop"
        />
      </div>
    );
  }
}

RelationShip.propTypes = {};

// Goal

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="goals">
        <Button
          className="love"
          text="Relation amoureuse"
        />
        <Button
          className="friends"
          text="Cercle d'Amis.es"
        />
        <Button
          className="work"
          text="Développer votre Réseau Professionnel"
        />
      </div>
    );
  }
}

Goals.propTypes = {};

// Affinities

class Affinities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="affinities">
        <Button
          className="food"
          text="Cuisine & Gourmet"
        />
        <Button
          className="travel"
          text="Globe Trotter"
        />
        <Button
          className="culture"
          text="Fan de Musée & Culture"
        />
        <Button
          className="animals"
          text="Amis.es des Animaux"
        />
        <Button
          className="sport"
          text="Sportif.ve"
        />
      </div>
    );
  }
}

Affinities.propTypes = {};

// Lifestyle Btn

class LifestyleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="lifestyle">
        <Button
          className="morning-button"
          text="Matinale"
        />
        <Button
          className="late-button"
          text="Couche Tard"
        />
        <Button
          className="breakfast-button"
          text="Petit déjeuner"
        />
        <Button
          className="brunch-button"
          text="Brunch"
        />
        <Button
          className="lunch-button"
          text="Déjeuner"
        />
        <Button
          className="afterwork-button"
          text="Afterwork"
        />
        <Button
          className="dinner-button"
          text="Dîner"
        />
      </div>
    );
  }
}

LifestyleBtn.propTypes = {};

export { Button, GenderButtons, ContinueButton, ValidationButton, OrientationBtn, LoveSituationBtn, ResearchBtn, RelationShip, Goals, Affinities, LifestyleBtn };
