import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li>
                    <i class="fas fa-theater-masks"></i>
                    <span>Théâtre</span>
                </li>
                <li>
                    <i className="fas fa-futbol"></i>
                    <span>Futsal</span>
                </li>
                <li>
                    <i className="fas fa-gamepad"></i>
                    <span>Jeux-vidéo</span>
                </li>
                <li>
                    <i className="fas fa-running"></i>
                    <span>Entretien/Musculation</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;