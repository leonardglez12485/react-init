import { ChildProcess } from 'child_process';
import {getImagen} from '../../src/base-pruebas/11-async-await'
import { string } from 'prop-types';

describe('11-async-await', ()=>{
    test('getImagen should return an image url', async ()=>{
    const url = await getImagen();
    expect(typeof url).toBe('string');
    })
})