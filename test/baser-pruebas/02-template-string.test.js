import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('template-astring', ()=>{
    test('test getSaludos most return "Hola Fernado"', ()=>{
        const nombre = 'Fernando';
        const message = getSaludo(nombre);
        expect(message).toBe('Hola Fernando');
    })
})