import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('CounterApp Componet', ()=>{

    const value = 25;

    test('should be match whit snapshot',()=>{
        const {container} =render(<CounterApp value={value}/>)
        expect(container).toMatchSnapshot();
    })

    test('should be display value = 25', ()=>{
        render(<CounterApp value={value}/>)
        expect(Number(screen.getByRole('heading',{level:2}).innerHTML)).toEqual(25);
    })

    test('should be inceres 1 whith the button', ()=>{
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('+'))
        expect(Number(screen.getByRole('heading',{level:2}).innerHTML)).toEqual(26);
    })

    test('should be decres 1 whith the button', ()=>{
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText('-'))
        expect(Number(screen.getByRole('heading',{level:2}).innerHTML)).toEqual(24);
    })

})