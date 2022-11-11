import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( { value }) => {

    /** Hooks */
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        //setCounter( counter + 1); // forma 1 de cambiar valor counter
        setCounter( (c) => c + 1  ); // forma 2 para cambiar valor counter 
    }

    const handleSubtract = () => setCounter( (c) => c - 1);// funcion de restar a counter
    const handleReset = () => setCounter( (c) => value );//funcion de reset counter
    
    return(
        <>
           <h1>CounterApp</h1> 
           <h2> { counter } </h2>
           
           {/* https://es.reactjs.org/docs/events.html  Documentacion REACT Eventos */}

           <button onClick={ handleAdd }> +1 </button>
           <button onClick={ handleSubtract }> -1 </button>
           <button onClick={ handleReset }> reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}