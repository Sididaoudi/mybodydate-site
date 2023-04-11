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

export const Login = () => {
    return (
        <MDBContainer
            fluid
            className='d-flex align-items-center justify-content-center bg-image'
            style={{
                backgroundImage: `url(${otherImage})`,
                width: '100%',
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingTop: '60px'
            }}
        >
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Mon compte</h2>
                    <MDBInput wrapperClass='mb-4' label='Votre Email' size='lg' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Votre mot de passe' size='lg' id='form4' type='password' />
                    <MDBBtn btn='mb-4 w-100 gradient-custom-4' size='lg'>Valider</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};
