import React from 'react'
import '../style/flexbox.css'

function GradeCard() {

    const gradeStyle = {
        textAlign: "start",
        boxShadow: "0px 0px 15px -5px",
        padding: "10px 10px",
        width: "475px",
        margin: "auto",
        backgroundColor: "#85D0FB"
    }

    const goodStyle = {
        backgroundColor: "##C8F391"
    }

    const averageStyle = {
        backgroundColor: "##F9F598"
    }

    const poorStyle = {
        backgroundColor: "##FBCE76"
    }

    const veryPoolStyle = {
        backgroundColor: "##F9AD95"
    }

    return (
        <div style={gradeStyle}>
            <div className='grade-container'>
                <h3>WQI</h3>
                <h3>Possible Usage</h3>
            </div>
            <div className='excellent-container'>
                <div>
                    <h3>Excellent</h3>
                    <h3>91-100</h3>
                </div>
                <div>
                    <h3>Drinking and Irrigation</h3>
                </div>
            </div>
            <div className='good-container'>
                <div>
                    <h3>Good</h3>
                    <h3>71-90</h3>
                </div>
                <div>
                    <h3>Drinking and Irrigation</h3>
                </div>
            </div>
            <div className='average-container'>
                <div>
                    <h3>Average</h3>
                    <h3>51-70</h3>
                </div>
                <div>
                    <h3>Irrigation and treatment needed before drinking</h3>
                </div>
            </div>
            <div className='poor-container'>
                <div>
                    <h3>Poor</h3>
                    <h3>26-50</h3>
                </div>
                <div>
                    <h3>Need attention for irrigation</h3>
                </div>
            </div>
            <div className='verypoor-container'>
                <div>
                    <h3>Very Poor</h3>
                    <h3>0-25</h3>
                </div>
                <div>
                    <h3>Unfit for all uses</h3>
                </div>
            </div>
        </div>
    )
}

export default GradeCard