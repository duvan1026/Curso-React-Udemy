import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => { 

        //Objeto
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //Comparar entre dos objetos
        expect( testUser ).toEqual( user );

    });


    test('getusuarioActivo debe de retornar un obejto', () => { 
         
        const name = 'Duvan';

        const user = getUsuarioActivo(name);

        //comparar el obejto user con los parametros
        expect( user ).toEqual( 
            {
                uid: 'ABC567',
                username: name
            });
         });
});