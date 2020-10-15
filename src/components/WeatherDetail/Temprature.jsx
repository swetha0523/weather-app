import React from 'react'

export default function Temprature({ temprature, feels }) {
    return (
        <div>
            <span>Temperature: {temprature} F</span>
            <br />
            <span>Feels: {feels} F</span>
        </div>
    )
}
