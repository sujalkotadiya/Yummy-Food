import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InputPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { title = '', image = '', source = '', id = '' } = location.state || {}; 

    const [recipeTitle, setTitle] = useState(title);
    const [recipeImage, setImage] = useState(image);
    const [recipeSource, setSource] = useState(source);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedRecipe = { id: id || Date.now(), title: recipeTitle, image: recipeImage, source: recipeSource }; // Create a new recipe object
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const updatedRecipes = id ? existingRecipes.map(recipe => recipe.id === id ? updatedRecipe : recipe) : [...existingRecipes, updatedRecipe];
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes)); 

        setTitle('');
        setImage('');
        setSource('');

        navigate('/your-recipes'); 
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className='flex justify-center'>
                <h1 className="text-3xl font-bold mb-6">{!id ? 'Add Your Recipe' : 'Update Your Recipe'}</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-orange-200">
                <input
                    type="text"
                    placeholder="Recipe Title"
                    value={recipeTitle}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border border-orange-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={recipeImage}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    className="border border-orange-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                    type="text"
                    placeholder="Source"
                    value={recipeSource}
                    onChange={(e) => setSource(e.target.value)}
                    required
                    className="border border-orange-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button type="submit" className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200">
                    {id ? 'Update Recipe' : 'Add Recipe'}
                </button>
            </form>
        </div>
    );
};

export default InputPage;
