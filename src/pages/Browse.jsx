import RecipeGrid from "../components/RecipeGrid"
import { recipesData2 } from "../Data/RecipeData2"

const Browse = () => {
  return (
    <div>
       <RecipeGrid data={recipesData2}/>
    </div>
  )
}

export default Browse
