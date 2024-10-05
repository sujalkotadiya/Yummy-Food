import { BiPlusCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'; 
import RecipeCard from './RecipeCard';

const RecipeGrid = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Just for you</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        <Link to="/input" className='rounded-lg shadow-lg flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center p-20'>
            <BiPlusCircle className='font-semibold text-5xl' />
            Add Your Recipe
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeGrid;
