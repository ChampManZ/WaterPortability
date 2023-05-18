import React from 'react'
import {Box} from '@mui/material'

function ParamCard() {

    return(
        <>
        <Box sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 4,
                    boxShadow: 3,
                    p: 4}}>
            <h2 className='h2-dash'>Temperature</h2>
            <p className='p-dash'>
            Temperature affects the water's ability to dissolve gases, including oxygen. 
            High water temperatures reduce the solubility of oxygen in the water. Warm water holds less Dissolved Oxygen than cold water. 
            </p>
            <br></br>
            <b>
            <p className='p-dash'>Recommended Value: 10-22 degree Celsius</p></b>
            <br></br>

            <h2 className='h2-dash'>pH</h2>
            <p className='p-dash'>
            pH is a measure of the amount of hydrogen ions (H+) present in a substance such as water. 
            Knowing the amount of hydrogen in a substance allows us to judge whether it is acidic, neutral, or basic
            </p>
            <br></br>
            <b>
            <p className='p-dash'>Recommended Value: 6.5-8.5. The best pH of drinking water is 7</p></b>
            <br></br>

            <h2 className='h2-dash'>Turbidity</h2>
            <p className='p-dash'>Turbidity makes the water cloudy or opaque. Turbidity is the amount of particulate matter 
            (such as clay, silt, plankton, or microscopic organisms) suspended in water</p>
            <br></br>
            <b>
            <p className='p-dash'>Recommended Value: <span>&#60;</span>5 NTU</p></b>
            <br></br>

            <h2 className='h2-dash'>Conductivity</h2>
            <p className='p-dash'>
            The conductivity of a water body is an early indicator of the water quality. Conductivity affects the salinity and total dissolved solids (TDS) content, 
            which in turn affects the concentration of oxygen in the water.
            </p>
            <br></br>
            <b>
            <p className='p-dash'>Recommended Value: 0-800 µS/cm.</p></b>
            <br></br>

            <h2 className='h2-dash'>TDS</h2>
            <p className='p-dash'>
            Total dissolved solids (TDS) are the amount of organic and inorganic materials, 
            such as metals, minerals, salts, and ions, dissolved in a particular volume of water
            </p>
            <br></br>
            <b>
            <p className='p-dash'>Recommended Value: <span>&#60;</span>300 mg/l.</p></b>
            <br></br>
        </Box>
        </>

    )


}

export default ParamCard