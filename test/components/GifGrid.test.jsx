import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {

    const category = 'One Time';

    test("Debe mostrar el loading inicialmente ", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category));
    });

    test("Debe mostrar items cuando se cargan imagenes useFetchGifs", () => {

        const images = [
            {
                id: "1",
                title: "Cualquier cosa",
                url: "https://localhost/cualquier/cosa.jpg"
            },
            {
                id: "2",
                title: "Cualquier cosa",
                url: "https://localhost/cualquier/cosa.jpg"
            },
        ];

        useFetchGifs.mockReturnValue({
            images: images,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});