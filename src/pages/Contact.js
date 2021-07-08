import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Rennes</span>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <span className="clickInput">berthet-fabrice@hotmail.fr</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <span className="clickInput">0752064430</span>
                            </li>
                        </ul>
                    </div>
            </div>
            
            
        </div>
    );
};

export default Contact;