import React from 'react'

class Input extends React.Component {
    render() {
        const {id, name, type, placeholder, value, handleChange} = this.props
        return(
            <>
                <label htmlFor={name}>
                    {name}
                </label>
                
                <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}/>
            </>
        )
    }
}

export default Input