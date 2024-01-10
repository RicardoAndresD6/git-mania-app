import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Pruebas en <GifItem />" , () => {

    const title = "Saitama";
    const url = "Url";

    test("Debe de hacer match con el snapshot" , () => {

        const { container }  = render( <GifItem title={title} url={url}  /> )
        expect(container).toMatchSnapshot();
    });

    test("Debe mostrar la imagen con el url y el alt aplicado", () =>{

        render( <GifItem title={title} url={url}  /> )

        const { src , alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(url);
        // screen.debug();
    });

    test("Debe mostrar el titulo del componente", () =>{

        render( <GifItem title={title} url={url}  /> )
        expect( screen.getByText('title')).toBeTruthy();
    
    });



});