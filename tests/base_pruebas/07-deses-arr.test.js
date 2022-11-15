import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr', () => {

    test('debe de retornar un string y un numero', () => { 

        //desentraliza el objeto 
        const [ letters, numbers] = retornaArreglo();

        //Compara los diferentes componentes del objeto por separado
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        //Opcion 1:   compara los tipos de datos que envia el objeto
        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        //Opcion 2:   compara los tipos de datos que envia el objeto 
        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );
     
    });
});