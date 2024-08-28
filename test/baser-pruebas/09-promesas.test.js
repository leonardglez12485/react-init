import {getHeroeByIdAsync} from '../../src/base-pruebas/09-promesas'

describe('09-pomesas', ()=>{
    test('should return am heroe', (done)=>{
        const id = 1;
        getHeroeByIdAsync(id)
             .then(heroe=>{

            expect(heroe).toEqual( {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
                done(); 
             })
    });

    test('should return an error if heroe not exist', (done)=>{
        const id = 100;
        getHeroeByIdAsync(id)
             .then(heroe=>{
                expect(heroe).toBeFalsy();
                done();
             })
             .catch(error=>{
                expect(error).toBe(`No se pudo encontrar el heroe con id ${id}`);
                 done();
             })
       
    })
})
