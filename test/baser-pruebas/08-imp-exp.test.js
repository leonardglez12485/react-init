import heroes from '../../data/heroes';
import {getHeroeById} from '../../src/base-pruebas/08-imp-exp'


describe('08-impo-exp', ()=>{
    test('getHeroeById most return the heroe wiuth this Id',()=>{
       const id = 1;
       const heroe = getHeroeById(id);
       const heroeData = heroes.find( (heroe) => heroe.id === id );
       expect(heroe).toEqual(heroeData);
    })

    test('getHeroeById most return an heroe by Id',()=>{
       const id = 1;
       const heroe = getHeroeById(id);
       expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
    })
    })

    test('getHeroeById most return undefine if id not exist',()=>{
       const id = 10;
       const heroe = getHeroeById(id);
       expect(heroe).toBeFalsy();
    })
})