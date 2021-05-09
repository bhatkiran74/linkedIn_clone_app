import React from 'react'
import './InputOptions.css'

const InputOptions = ({ Icon, Title, Color }) => {
    return (
        <div className="input_options">
            <Icon style={{ color: Color }} />
            <h4>{Title}</h4>

        </div>
    )
}

export default InputOptions
