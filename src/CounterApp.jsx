import PropTypes from 'prop-types';

export const CounterApp = ( { value }) => {
    
    return(
        <>
           <h1>CounterApp</h1> 
           <p>{ value }</p>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}