import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Myfeed from "./pages/Myfeed";
import Browse from "./pages/Browse";
import ProRecipe from "./pages/ProRecipe";
import GuidedRecipe from "./pages/GuidedRecipe";
import AllCollection from "./pages/AllCollection";
import AllPersonal from "./pages/AllPersonal";
import AllYums from "./pages/AllYums";
import BreakFast from "./pages/BreakFast";
import Header from "./components/Header";
import InputPage from "./pages/InputPage";
import YourRecipe from "./pages/YourRecipe";
import SearchItem from "./components/SearchItem";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signup" />} /> 
        
        <Route path="/myfeed" element={<Myfeed />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/prorecipe" element={<ProRecipe />} />
        <Route path="/guidedrecipe" element={<GuidedRecipe />} />
        <Route path="/allcollection" element={<AllCollection />} />
        <Route path="/allpersonal" element={<AllPersonal />} />
        <Route path="/allyums" element={<AllYums />} />
        <Route path="/breakfast" element={<BreakFast />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/your-recipes" element={<YourRecipe />} />
        <Route path="/search" element={<SearchItem />} />
      </Routes>
    </Router>
  );
};

export default App;
