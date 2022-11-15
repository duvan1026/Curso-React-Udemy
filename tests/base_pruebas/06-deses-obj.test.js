import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses', () => {

    test('usContext debe retornar un objeto', () => { 

        const testus = { 
            clave: 12, 
            nombre: 'duvan', 
            edad: 22, 
            rango: 'Capitán' };    
    
        const user = usContext( testus );
            
        //Comparacion entre obejtos para verificar retorno
        expect( user ).toEqual({
                nombreClave: 12,
                anios: 22,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            });
    });

});