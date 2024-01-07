import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifManiaApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {  

        if(categories.includes(newCategory )) return;

        setCategories( [ newCategory, ...categories] );
    }

    return (
        <>
            <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl text-center'>GifManiaApp</h1>

            <AddCategory 
                onNewCategory={ (event => onAddCategory(event)) }
            />

            {
                categories.map( category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}

