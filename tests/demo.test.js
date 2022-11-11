

describe('Pruebas en <DemoComponent/>', () => { //Agrega titulo a la prueba 

    test('Esta prueba no debe de fallar', () => {

        //1. inicializacion
        const message1 = 'Hola mundo';    
    
        //2. estimulo
        const message2 = message1.trim(); // .trim() limpia los espacias adelante y atras del string.
    
        //3. Observar el comportamiento ... esperado
        expect( message1 ).toBe( message2 );// condicion de jast para condicion
    
    });


 })
