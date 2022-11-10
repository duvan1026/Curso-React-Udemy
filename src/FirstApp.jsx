
/***Colocar siempre que sea posible las funciones por fuera del render.(export)**/


// const newMessage = {
//     message: 'Hola Mundo',
//     tittle: 'duvan'
// };


// const getName = () => {
//     return(
//         {
//             firstname: 'Duvan ',
//             lastname: 'Castro'
//         }
//     )
// }

// const getResult = () => {
//     return 4 +4;
// }
import PropTypes from 'prop-types';


export const FirstApp = ( { title, subTitle, name} ) => {

  //console.log(props);

  return (
    // ***  <>  nodo padre **** simbologia de fragmento. agrupador de otros elementos html
    <>
        <h1>{ title }</h1>
        {/* { <code>{ JSON.stringify( newMessage ) }</code> } */}
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
} 


//con los Proptypes, me permite verificar el tipo de dato del props
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,  // el title debe tipo String y debe ser obligatorio
  subTitle: PropTypes.string.isRequired
}

//definir los valores de las props por defecto
FirstApp.defaultProps={
  name: 'Duvan Castro',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}