import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import WQICard from '../components/WQICard'
import '../style/flexbox.css'

function Dashboard() {

    const fontFamilyStyle = {
        fontFamily: 'Mitr'
    }

    return (
        <div>
            <Navbar />
            <div class="flex-container">
                <div class="flex-left" style={fontFamilyStyle}>
                    <h3 style={fontFamilyStyle}>Your Water Quality</h3>
                    <Card /> <br />
                    <button type='button'>Measure again</button>
                    <h3>Water Quality Index</h3>
                </div>
                <div class="flex-right" style={fontFamilyStyle}>
                    <WQICard />
                    
                </div>
            </div>
        </div>
  )
}

export default Dashboard