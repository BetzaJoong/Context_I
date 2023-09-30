import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import photos from "../public/photos.json"
import MyContext from "./MyContext";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import './App.css';


const App = () => {
  const [data, setData] = useState(photos.photos);
  const [favorites, setFavorites] = useState([]);
  const sharedData = { data, setData, favorites, setFavorites };
  
  return (
    <div>
      <MyContext.Provider value={sharedData}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default App;
