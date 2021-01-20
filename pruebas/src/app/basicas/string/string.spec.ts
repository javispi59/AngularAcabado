import { mensaje } from './string';


//describe('Pruebas de Strings');

//it('Debe de regresar un string');

describe( 'Pruebas de strings', () => {

    it( 'Debe de regresar un string', () => {

        const resp = mensaje('Javier');

        expect( typeof resp).toBe('string');

    });

    it( 'Debe devolver el saludo con el nombre enviado', () => {

        const nombre = 'Jose';
        const resp = mensaje(nombre);

        expect( resp ).toContain(nombre);

    });

});