import React from 'react'

function Navbar() {

    const headerStyle = {
        backgroundColor: "#85D0FB",
        padding: "10px 10px",
        fontFamily: 'Mitr'
    }

    return (
        <header style={headerStyle}>
            <h3>Water Portability Dashboard</h3>
        </header>
    )
}

export default Navbar