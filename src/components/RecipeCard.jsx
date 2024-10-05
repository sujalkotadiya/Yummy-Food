import { HiHeart } from "react-icons/hi";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold line-clamp-1">{recipe.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{recipe.source}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="flex items-center text-orange-500">
            {Array.from({ length: Math.floor(recipe.rating) }).map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
              </svg>
            ))}
          </span>
          <span className="flex items-center text-gray-600">
            <HiHeart />
            {recipe.likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
