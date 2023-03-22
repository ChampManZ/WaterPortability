import React from 'react'
import '../style/flexbox.css'

function Card() {

    const fontFamilyStyle = {
        fontFamily: 'Mitr'
    }

    const cardStyle = {
        width: "700px",
        boxShadow: "0px 0px 15px -5px",
        margin: "auto"
    }

    const wqiStyle = {
        height: "150px",
        backgroundColor: "#95F39F",
        fontFamily: 'Mitr'
    }

    return (
        <div style={cardStyle}>
            <div className='wqi-container' style={wqiStyle}>
                <div>Image</div>
                <div>
                    <div>98 WQI</div>
                    <div>Excellent</div>
                </div>
            </div>
            <div className='parameter-container' style={fontFamilyStyle}>
                <div>Temp: 10</div>
                <div>pH: 10</div>
                <div>Turbidity: 10</div>
                <div>Conductivity: 10</div>
            </div>
        </div>
    )
}

export default Card