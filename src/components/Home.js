import React from 'react'
import DogList from './DogList.js'

class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>Home</h1>
                <DogList />
            </div>
            
        )
    }
}

export default Home