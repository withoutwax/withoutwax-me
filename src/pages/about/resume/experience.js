import React from 'react';

const Experience = class extends React.Component {

    render() {
        const { company, position, startDate, currentlyWorking, endDate, locations, description } = this.props; // locations needs to be plural. 'location' seems to be a existing keyword.

        return (
                <div className="resume-experience">
                    <h4>{ company } <span className="resume-position">| { position }</span></h4>
                    <p className="resume-date">{ startDate } - { currentlyWorking ? "Present" : endDate }<span> &bull;</span> <span>{ locations }</span></p>
                    <p className="resume-description">{ description }</p>
                </div>
        );
    }
}

export default Experience;