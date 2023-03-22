import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import '../style/flexbox.css'

function Dashboard() {

    const fontFamilyStyle = {
        fontFamily: 'Mitr'
    }

    return (
        <div>
            <Navbar />
            <div class="flex-container">
                <div class="flex-left">
                    <h3 style={fontFamilyStyle}>Your Water Quality</h3>
                    <Card />
                </div>
                <div class="flex-right">
                    This will have content in the right box.
                </div>
            </div>
        </div>
  )
}

export default Dashboard