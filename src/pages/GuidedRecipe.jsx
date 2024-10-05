import RecipeGrid from '../components/RecipeGrid'
import { recipesData4 } from '../Data/RecipeData4'

const GuidedRecipe = () => {
  return (
    <div>
      <RecipeGrid data={recipesData4}/>
    </div>
  )
}

export default GuidedRecipe
