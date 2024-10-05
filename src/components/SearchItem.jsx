import { useLocation } from 'react-router-dom';
import { recipesData } from '../Data/RecipeData';
import { useSorting } from '../components/ShortingContext';

const SearchItem = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';
    const { isSorted } = useSorting();

    const localStorageRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    const combinedData = [...localStorageRecipes, ...recipesData];

    const filteredRecipes = combinedData.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
    );

    const sortedRecipes = isSorted 
        ? filteredRecipes.sort((a, b) => a.title.localeCompare(b.title)) 
        : filteredRecipes;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Search Results</h1>
            {sortedRecipes.length === 0 ? (
                <p>No recipes found for "{query}".</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sortedRecipes.map(recipe => (
                        <div key={recipe.id} className="border p-4 rounded-lg shadow">
                            <h2 className="font-bold text-lg">{recipe.title}</h2>
                            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-2" />
                            <p>Source: {recipe.source}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchItem;
