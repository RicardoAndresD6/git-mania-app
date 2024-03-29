import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onClickSearch = (e) => {
        e.preventDefault();

        const clean_input = inputValue.trim();

        if (clean_input.length <= 1) return;

        onNewCategory(clean_input);
        setInputValue('');
    }

    const onInputSubmit = (e) => {
        e.preventDefault();

        const clean_input = inputValue.trim();

        if (clean_input.length <= 1) return;

        onNewCategory(clean_input);
        setInputValue('');
    }

    return (
        <form onSubmit={ onInputSubmit } className='my-10' aria-label='form' >
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none bg-transparent">
                    <svg 
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 bg-transparent" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Buscar gifs..."
                    value = {inputValue}
                    onChange={ onInputChange }
                    className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                /> 
                <button 
                    type="submit" 
                    onClick={ onClickSearch }
                    className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}