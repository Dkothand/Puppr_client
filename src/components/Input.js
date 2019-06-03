import React from 'react'

class Input extends React.Component {
    render() {
        return(
            <>
                <label htmlFor={this.props.name}>
                    {this.props.name}
                </label>
                
                <input
                id={this.props.id}
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.handleChange}/>
            </>
        )
    }
}

export default Input