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
                Fish and other organisms all have a preferred temperature range, and as temperature falls above or below this range, 
                the number of individuals decreases. Water temperature is also important for its influence on water chemistry; warmer water can hold less dissolved oxygen.
                The water temperature index varies from 0 to 1. The temperature index decreases from 1 for every degree that water temperature is greater than 20°C.
            </p>
            <br></br>

            <h2 className='h2-dash'>pH</h2>
            <p className='p-dash'>
                A method for determining the pH value in rain, drinking and mineral waters, bathing waters, surface and ground waters, 
                as well as municipal and industrial waste waters, and liquid sludge, within the range pH 2 to pH 12 with an ionic strength below I = 0,3 mol/kg 
                (conductivity at 25 °C less than 2000 mS/m) solvent and in the temperature range 0 °C to 50 °C.
            </p>
            <br></br>

            <h2 className='h2-dash'>Turbidity</h2>
            <p className='p-dash'>ISO 7027-1:2016 specifies two quantitative methods using optical turbidimeters or nephelometers for the determination of turbidity of water:</p>
                <p className='p-dash'>a. nephelometry, procedure for measurement of diffuse radiation, applicable to water of low turbidity (for example drinking water).</p>
                <p className='p-dash'>b. turbidimetry, procedure for measurement of the attenuation of a radiant flux, more applicable to highly turbid waters (for example waste waters or other cloudy waters).</p>
                <p className='p-dash'>Turbidities measured according to the first method are presented as nephelometric turbidity units (NTU). The results typically range between less than 0,05 NTU and 400 NTU. Depending on the instrument design, it can also be applicable to waters of higher turbidity. There is numerical equivalence of the units NTU and formazin nephelometric unit (FNU).
                    Turbidity measured by the second method is expressed in formazin attenuation units (FAU), results typically range between 40 FAU and 4 000 FAU.</p>
            <br></br>

            <h2 className='h2-dash'>Conductivity</h2>
            <p className='p-dash'>
                Conductivity is a measure of the ability of water to conduct electricity. It is related to the amount of dissolved salt that is present in water. 
                Water with a lot of salt can be dangerous to crops.
                ICOND reaches a high of 20 when conductivity is 200 μS/cm (conductivity of drinking water). For conductivity values greater than 4000 μS/cm, ICOND = 0.
            </p>
            <br></br>

            <h2 className='h2-dash'>TDS</h2>
            <p className='p-dash'>
                A measure of the dissolved combined content of all inorganic and organic substances present in a liquid in molecular, ionized, or micro-granular (colloidal sol) suspended form. TDS concentrations are often reported in parts per million (ppm). 
                The solids must be small enough to survive filtration through a filter with 2-micrometer (nominal size, or smaller) pores
            </p>
            <br></br>
        </Box>
        </>

    )


}

export default ParamCard