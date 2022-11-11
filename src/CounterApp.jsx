import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( { value }) => {

    /** Hooks */
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {

        //setCounter( counter + 1); // forma 1 de cambiar valor counter
        setCounter( (c) => c + 1  ); // forma 2 para cambiar valor counter 

    }



    /* Funcion con sintaxis normal*/  
    // function handleAdd(event, newValue) { 
    //     // console.log(event);
    //     console.log(newValue);
    // }
    /** para llamar la funcion .... (event) => handleAdd(event, 'hola') */

    /* Funcion de flecha equivalente a la funcion normal*/
    // const handleAdd = (event) => { 
    //     console.log(event);
    //     //console.log(newValue);
    // }
    /* como en este caso solo se requiere el valor de event 
    *  (event) => handleAdd(event)
    *  se establece solo con el nombre de la funcion */
    
    return(
        <>
           <h1>CounterApp</h1> 
           <h2> { counter } </h2>

           {/* https://es.reactjs.org/docs/events.html  Documentacion REACT Eventos */}
           <button onClick={ handleAdd }>
                +1
           </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}