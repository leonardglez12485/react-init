import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


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
        
    // test('must display the title in an h2', ()=>{
    //     const title = 'Hola pepe';
    //     const subtitle= 'Hi';
    //     const name = 'Leonard';
    //     const {container, getByText, getByTestId} =render(<FirstApp title={title} subtitle={subtitle} name={name}/>)
    //     expect(getByText(title)).toBeInTheDocument;
    //     expect(getByText(title)).toBeTruthy();
        
    //     // const h2 = container.querySelector('h2');
    //     // expect(h2.innerHTML).toContain(title);
    //     expect(getByTestId('test-title')).toBeInTheDocument;
    //     expect(getByTestId('test-title').innerHTML).toContain(title);
    // })
    
    // test('must display the subtitle sent in props', ()=>{
    //     const title = 'Hola pepe';
    //     const subtitle= 'Hi';
    //     const name = 'Leonard';
    //     const {getByText} =render(<FirstApp title={title} subtitle={subtitle} name={name}/>)
     
    //     expect(getByText(subtitle)).toBeTruthy();
        
    //     // const h2 = container.querySelector('h2');
    //     // expect(h2.innerHTML).toContain(title);
    //     // expect(getByTestId('test-title')).toBeInTheDocument;
    //     // expect(getByTestId('test-title').innerHTML).toContain(title);
    // })
})