
/***Colocar siempre que sea posible las funciones por fuera del render.(export)**/


const newMessage = {
    message: 'Hola Mundo',
    tittle: 'duvan'
};


const getName = () => {
    return(
        {
            firstname: 'Duvan ',
            lastname: 'Castro'
        }
    )
}

const getResult = () => {
    return 4 +4;
}


export const FirstApp = () => {


  return (
    // ***  <>  nodo padre **** simbologia de fragmento. agrupador de otros elementos html
    <>
        <h1>{ JSON.stringify( getName() ) }</h1>
        <h1> { getResult() } </h1>
        {/* 
        <code>{ JSON.stringify( newMessage ) }</code> //JSON.stringify me serializa el objeto para poder implementarlo
        */}
        <p>Soy un subtitulo</p>
    </>
  )
} 
