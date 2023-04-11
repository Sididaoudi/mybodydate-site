import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import otherImage from '../assets/images/Background-Web.png';
import { GenderButtons } from '../components/Buttons';

export const Registration = () => {
    return (
        <MDBContainer
            fluid
            className='main-container d-flex align-items-center justify-content-center bg-image'
            style={{
                backgroundImage: `url(${otherImage})`,
                width: '100%',
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingTop: '60px',
                overflow: 'auto',
            }}
        >
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px', maxHeight: '80%' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">S'inscrire</h2>
                    <MDBInput wrapperClass='mb-4' label='Entrez votre Email' size='lg' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Confirmation Email' size='lg' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Entrez votre ville' size='lg' id='form3' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Votre genre' size='lg' id='form1' type='text' />
                    <GenderButtons />
                    <MDBInput wrapperClass='mb-4' label='Votre mot de passe' size='lg' id='form4' type='password' />
                    <MDBInput wrapperClass='mb-4' label='Répetez votre mot de passe' size='lg' id='form5' type='password' />
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label="J'accepte les conditions générales d'utilisations" />
                    </div>
                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Créer mon compte</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};
