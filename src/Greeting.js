import React from 'react';




class Greeting extends React.Component{

    render(){

        return (

            <span>Hola, {this.props.name} !</span>
        )
    }
}

export default Greeting;