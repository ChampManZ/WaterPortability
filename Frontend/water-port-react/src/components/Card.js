import React from 'react'
import '../style/flexbox.css'

function Card() {

    const cardStyle = {
        width: "400px",
        boxShadow: "0px 0px 15px -5px",
        margin: "auto"
    }

    const wqiStyle = {
        height: "150px",
        backgroundColor: "#95F39F"
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
            <div className='parameter-container'>
                <div>Temp</div>
                <div>pH</div>
                <div>Turbidity</div>
                <div>Conductivity</div>
            </div>
        </div>
    )
}

export default Card