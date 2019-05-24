import React from 'react';

const Education = class extends React.Component {

    render() {
        const { school, date, degree, major } = this.props;

        return (
                <div className="resume-education">
                    <h4>{ school } <span className="resume-education-degree">| { degree }</span></h4>
                    <p style={{margin:"5px 0px"}}>{ degree } in <span className="resume-education-major">{ major }</span></p>
                    <p className="resume-date">{ date }</p>
                </div>
        );
    }
}

export default Education;