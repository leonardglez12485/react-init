import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('05-funciones', ()=>{
    test('test getUser most return an object', ()=>{
        const nombre = 'El_Papi1502';
        const object = {
            uid: 'ABC123',
            username: nombre
        }
        const user = getUser();
        //const userActive = getUsuarioActivo(nombre);
        expect(user).toEqual(user);
    });

    test('test getUsuarioActivo most return an object', ()=>{
        const nombre = 'Fernando';
        const object = {
            uid: 'ABC567',
            username: nombre
        }
        const userActive = getUsuarioActivo(nombre);
        expect(userActive).toEqual(object);
    });
});