import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'


describe('08-impo-exp', ()=>{
    test('getHeroeById most return the heroe with this Id',()=>{
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
    
    test('getHeroesByOwner most return the heroe with this owner', ()=>{
         const owner = 'DC';
         const heroe = getHeroesByOwner(owner);
         const heroeData = heroes.filter( (heroe) => heroe.owner === owner );
         expect(heroe).toEqual(heroeData);
    })

    test('getHeroesByOwner most return an heroe by owner', ()=>{
         const owner = 'DC';
         const heroe = getHeroesByOwner(owner);
         expect(heroe).toEqual([{
               id: 1,
               name: 'Batman',
               owner: 'DC'
         },
         {
               id: 3,
               name: 'Superman',
               owner: 'DC'
         },
         {
               id: 4,
               name: 'Flash',
               owner: 'DC'
         }
      ])
    })

    test('getHeroesByOwner most return undefined if owner not existe', ()=>{
      const owner = 'DH';
         const heroe = getHeroesByOwner(owner);
         expect(heroe).toEqual([]);
    })

    test('getHeroesByOwner most return undefined if owner not existe', ()=>{
      const owner = 'DC';
         const heroe = getHeroesByOwner(owner);
         expect(heroe).toHaveLength(3);
    })

    test('getHeroesByOwner most return undefined if owner not existe', ()=>{
      const owner = 'Marvel';
         const heroe = getHeroesByOwner(owner);
         expect(heroe).toHaveLength(2);
    })

})