import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id:1, value: "Java", xp:0.9},
            {id:1, value: "Javascript", xp:0.5},
            {id:1, value: "node JS", xp:0.6},
            {id:1, value: "Css", xp:0.5},
            {id:1, value: "React", xp:0.4},
            {id:1, value: "SQL", xp:0.6},
            {id:1, value: "MongoDB", xp:0.5},
        ]

    }
    render() {
        let {languages} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
            </div>
        );
    }
}

export default Languages;