import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Diplômes</h3>
            <div className="exp-1">
                <h4>Licence informatique - parcours MIAGE</h4>
                <h5>2018-2021 | mention AB</h5>
                <p>ISTIC - Université de Rennes 1</p>
                 <a href="https://istic.univ-rennes1.fr/" target="_blank" rel="noreferrer">   
                 <img src="./media/istic.png" alt="istic" />
                </a>
            </div>
            <div className="exp-2">
                <h4>Bac Scientifique - spécialité physique</h4>
                <h5>mention AB</h5>
                <p>Lycée Maupertuis - Saint Malo</p>
                <a href="https://www.lyceemaupertuis.bzh/" target="_blank" rel="noreferrer">   
                 <img src="./media/logomaup.png" alt="istic" />
                </a>
            </div>
        </div>

    );
};

export default Experience;