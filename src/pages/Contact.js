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
                            <span className="clickInput">faberthet35@gmail.com</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <span className="clickInput">0752064430</span>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://github.com/faberthet" target="_blank" rel="noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="contactContent2">
                <div className="contactBox2">
                    <div className="hh1">Contactez-moi</div>
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
                <div className="socialNetwork2">
                    <ul>
                        <a href="https://github.com/faberthet" target="_blank" rel="noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;