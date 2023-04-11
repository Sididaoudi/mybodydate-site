import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function MyFooter() {
    return (
        <div className="footer-wrapper">
            <MDBFooter className="footer-container" >
                <div className="myFooter"></div>
                <div className="text-center p-2" style={{ backgroundColor: 'white' }}>
                    © 2023 Copyright:
                    <a className="text-footer" href="#">
                        Télécharger notre application
                    </a>
                </div>
            </MDBFooter>
            <style>
                {`.footer-wrapper .container {
          height: auto;
          min-height: auto;
        }`}
            </style>
        </div>
    );
}
