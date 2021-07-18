import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id:1, value: "Java", xp:0.9},
            {id:2, value: "Javascript", xp:0.5},
            {id:3, value: "node JS", xp:0.6},
            {id:4, value: "Css", xp:0.5},
            {id:5, value: "React", xp:0.4},
            {id:6, value: "Php", xp:0.5}
        ],
        bdd: [
            {id:1, value: "SQL", xp:0.6},
            {id:2, value: "MongoDB", xp:0.5}
        ],
        ad: [
            {id:1, value: "R", xp:0.4}
        ]

    }
    render() {
        let {languages, bdd, ad} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                />
                <ProgressBar 
                    languages={bdd}
                    className="bddDisplay"
                    title="Base de données"
                />
                <ProgressBar 
                    languages={ad}
                    className="adDisplay"
                    title="Analyse de données"
                />
            </div>
        );
    }
}

export default Languages;