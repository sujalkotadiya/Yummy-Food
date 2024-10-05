import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
const YourRecipe = () => {
  const navigate = useNavigate(); 
  const [recipes, setRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem('recipes')) || [];
  });

  const [likes, setLikes] = useState(() => {
    const savedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    return recipes.map(recipe => ({
      id: recipe.id,
      count: savedLikes[recipe.id]?.count || 0,
      liked: savedLikes[recipe.id]?.liked || false,
    }));
  });

  const handleLike = (id) => {
    setLikes((prevLikes) => {
      const updatedLikes = prevLikes.map((like) => {
        if (like.id === id) {
          const newCount = like.liked ? like.count - 1 : like.count + 1;
          const newLiked = !like.liked; 
          return { ...like, count: newCount, liked: newLiked };
        }
        return like;
      });

      const likesToSave = {};
      updatedLikes.forEach((like) => {
        likesToSave[like.id] = { count: like.count, liked: like.liked };
      });
      localStorage.setItem('likes', JSON.stringify(likesToSave)); 
      return updatedLikes;
    });
  };

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    const updatedLikes = likes.filter(like => like.id !== id);
    const likesToSave = {};
    updatedLikes.forEach((like) => {
      likesToSave[like.id] = { count: like.count, liked: like.liked };
    });
    localStorage.setItem('likes', JSON.stringify(likesToSave)); 
  };

  const handleEdit = (recipe) => {
    navigate('/input', { state: recipe }); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Recipes</h1>
      {recipes.length === 0 ? (
        <p>No recipes found. Please add some recipes!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => {
            const like = likes.find(l => l.id === recipe.id); 
            return (
              <div key={recipe.id} className="border p-4 rounded-lg shadow">
                <h2 className="font-bold text-lg">{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-2" />
                <p>Source: {recipe.source}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => handleLike(recipe.id)} className="flex items-center mr-4">
                    <FaHeart className={`text-2xl ${like.liked ? 'text-red-500' : 'text-gray-400'}`} />
                  </button>
                  <span className="mr-4">{like.count}</span>
                </div>
                <div className="flex mt-4 gap-2">
                  <button 
                    onClick={() => handleEdit(recipe)} 
                    className="bg-orange-500 text-white p-2 rounded  hover:bg-orange-600 transition duration-200 w-1/3"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(recipe.id)} 
                    className="bg-orange-500 text-white p-2 rounded hover:bg-red-600 transition duration-200 w-1/3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default YourRecipe;
