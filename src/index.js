import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//Importamos nuestro componente
//import RandomCat from './components/RandomCat';
//import Greeting from './Greeting';
import CatList from './components/CatList';
import RandomCat from './components/RandomCat';


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<RandomCat />, document.getElementById('root'));

//const componentToRender = <Greeting name="María Moliner" />;

//ReactDOM.render(componentToRender, document.getElementById('root'));

//Pasamos el ancho al componente

const TamanioGato = <RandomCat width="400" height="200"/>;

ReactDOM.render(TamanioGato , document.getElementById('root'));

ReactDOM.render(< CatList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
