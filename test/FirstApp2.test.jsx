import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'


describe('<FirstApp Component/>', ()=>{
   
    const title = 'Hola pepe';
    const subtitle= 'Hi';
    const name = 'Leonard';
   
    test('should be match whit snapshot',()=>{
        const {container} =render(<FirstApp title={title} subtitle={subtitle} name={name}/>)
        expect(container).toMatchSnapshot();
    })

    test('should be display mesage: Hola pepe', ()=>{
        render(<FirstApp title={title} subtitle={subtitle} name={name}/>)
        expect(screen.getByText(title)).toBeTruthy;
    })

    test('must display the title in an h2', ()=>{
        render(<FirstApp title={title} subtitle={subtitle} name={name}/>)
        expect(screen.getByRole('heading',{level:2}).innerHTML).toBeTruthy;
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(title);
    })
    
    test('must display the subtitle sent in props', ()=>{
        render(<FirstApp title={title} subtitle={subtitle} name={name}/>) 
        expect(screen.getAllByText(subtitle)).toBeTruthy();
    })
})