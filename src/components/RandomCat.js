import React from 'react';

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS= 10;
    //Creamos un componente(Subclase de la clase component)

    class RandomCat extends React.Component{

        //Renderiza el contenido a través del método render
        render(){

            const randomCat = getRandomInteger(NUMBER_OF_CATS);

            return (

                <a href="http://lorempixel.com">
                    <img src={ `http://lorempixel.com/400/200/cats/${randomCat}` } alt="Random" width= {this.props.width} height= {this.props.height} />
                </a>
            );
        }
    }

   RandomCat.defaultProps = {

    width: "400",
    height: "200"
    
   };

export default RandomCat;