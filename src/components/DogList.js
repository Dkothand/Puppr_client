import React from 'react'

class DogList extends React.Component {
    componentDidMount() {
        this.getDogs()
    }
    getDogs() {
        fetch('/dogs')
        .then(res => res.json())
        .then(resJSON => console.log(resJSON.dogs))
        .catch(err => console.error(err))
    }
    render() {
        return(
            <h2>List of Dogs</h2>
        )
    }
}

export default DogList