import RecipeGrid from '../components/RecipeGrid'
import { recipesData } from '../Data/RecipeData.js';


const Myfeed = () => {
  return (
    <div>
      <RecipeGrid data={recipesData} />
    </div>
  )
}

export default Myfeed
