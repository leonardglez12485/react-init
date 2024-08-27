import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('07-deses-arr', ()=>{
    test('must be return an string and name', ()=>{
        const [letter, numbers] = retornaArreglo();
        expect(letter).toBe('ABC');
        expect(typeof letter).toBe('string');
        expect(numbers).toBe(123);
        expect(typeof numbers).toBe;
        expect(letter).toEqual(expect.any(String));
    })
})

