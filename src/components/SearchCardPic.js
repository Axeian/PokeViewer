import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function SearchCardPic({ pokemonID, imageLoaded, setImageLoaded, fromList }) {
  const [width, height] = !fromList ? ["250px", "300px"] : ["200px", "240px"];

  return (
    <div style={{ backgroundColor: "#f2f2f2", border: "1px solid black" }}>
      <img
        alt="pokemon"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`}
        width={width}
        height={height}
        style={!imageLoaded ? { display: "none" } : {}}
        onLoad={() => setImageLoaded(true)}
      ></img>

      {!imageLoaded && (
        <div
          className="d-inline-flex align-items-center justify-content-center"
          style={{ width: `${width}`, height: `${height}` }}
        >
          <div>
            <ClipLoader loading={!imageLoaded} size={150} />
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(SearchCardPic);
