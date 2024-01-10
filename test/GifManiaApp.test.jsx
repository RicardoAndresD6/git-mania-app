import { render, fireEvent, screen } from '@testing-library/react';
import { GifManiaApp } from '../src/GifManiaApp';

describe("Pruebas en <GifManiaApp/>" , () => {

    test("render GifMania Component", async () => {

        const { getByRole, getByText} = render(<GifManiaApp />);

        // Test if the h1 is the same name
        const titleElement = getByRole('heading', { level: 1 });
        expect(titleElement.textContent).toBe("GifManiaApp");

        // Test how it behaves for the onAddCategory
        const addCategoryInput = getByRole('textbox');
        const newCategory = 'New Categorttttty';
        
        fireEvent.change(addCategoryInput, { target: { value: newCategory } });
        fireEvent.keyPress(addCategoryInput, { key: 'Enter', code: 'Enter' });
        
        const newCategoryElement = getByRole('textbox');

        console.log(newCategoryElement);
        screen.debug();

        // expect(newCategoryElement).toBeInTheDocument();

    });

});