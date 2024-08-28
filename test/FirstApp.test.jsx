import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('<FirstApp Component/>', ()=>{
    test('should be match whit snapshot',()=>{
        const title = 'Hola pepe';
        const subtitle= 'Hi';
        const name = 'Leonard';
        const {container} =render(<FirstApp title={title} subtitle={subtitle} name={name}/>)
        expect(container).toMatchSnapshot();
    })
})