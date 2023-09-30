import React, { useContext } from "react";
import MyContext from "../MyContext";
import IconHeart from "./IconHeart";
import "../App.css";

const Gallery = () => {
  const { data, favorites, setFavorites } = useContext(MyContext);

  const toggleFavorite = (photo) => {
    if (favorites.includes(photo)) {
      setFavorites(favorites.filter((fav) => fav !== photo));
    } else {
      setFavorites([...favorites, photo]);
    }
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {data.map((foto, i) => (
        <div className="col-12 col-sm-6 col-md-4" key={i}>
          <div className="image-container">
            <img src={foto.src.tiny} alt={foto.alt} />
            <div className="image-overlay">
              <IconHeart
                filled={favorites.includes(foto)}
                onClick={() => {
                  toggleFavorite(foto);
                }}
                className="heart-icon"
              />
              <span className="image-description-below">
                <span className="image-description">{foto.alt}</span>
                <span className="photographer">Fotógrafo: {foto.photographer}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;


