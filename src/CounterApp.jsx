import PropTypes from 'prop-types';

export const CounterApp = ( { value }) => {

    /* Funcion con sintaxis normal*/  
    // function handleAdd(event, newValue) { 
    //     // console.log(event);
    //     console.log(newValue);
    // }
    /** para llamar la funcion .... (event) => handleAdd(event, 'hola') */

    /* Funcion de flecha equivalente a la funcion normal*/
    const handleAdd = (event) => { 
        console.log(event);
        //console.log(newValue);
    }
    /* como en este caso solo se requiere el valor de event 
    *  (event) => handleAdd(event)
    *  se establece solo con el nombre de la funcion */
    
    return(
        <>
           <h1>CounterApp</h1> 
           <h2> { value } </h2>

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