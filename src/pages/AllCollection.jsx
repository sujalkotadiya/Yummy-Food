import RecipeGrid from "../components/RecipeGrid"
import { recipesData5 } from "../Data/RecipeData5"

const AllCollection = () => {
  return (
    <div>
      <RecipeGrid data={recipesData5}/>
    </div>
  )
}

export default AllCollection
