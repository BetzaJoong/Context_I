import React, { useContext } from "react";
import MyContext from "../MyContext";
import "../favorites.css";

const Favorites = () => {
  const { favorites } = useContext(MyContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map((photo, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <div className="image-container">
              <img src={photo.src.tiny} alt={photo.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;



