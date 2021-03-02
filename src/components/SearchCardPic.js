import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { shinyContext } from "../App";

function SearchCardPic({ pokemonID, imageLoaded, setImageLoaded, fromList }) {
  const shiny = useContext(shinyContext);

  const [width, height] = !fromList ? ["250px", "300px"] : ["200px", "240px"];

  // useEffect(() => {
  //   let source = axios.CancelToken.source();
  //   setImageLoaded(false);
  //   try {
  //     axios
  //       .get(
  //         `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`,
  //         { CancelToken: source.token }
  //       )
  //       .then()
  //       .catch(() => setImageUnavailable(true));
  //   } catch (err) {
  //     if (!axios.isCancel(err)) {
  //       throw err;
  //     }
  //   }

  //   return () => {
  //     source.cancel();
  //   };
  // }, [pokemonID]);

  return (
    <div style={{ backgroundColor: "#f2f2f2", border: "1px solid black" }}>
      <img
        alt="pokemon"
        src={
          // !imageUnavailable
          //   ?
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            shiny ? "/shiny/" : ""
          }${pokemonID}.png`
          //: process.env.PUBLIC_URL + "/ms-icon-70x70.png"
        }
        width={width}
        height={height}
        style={!imageLoaded ? { display: "none" } : {}}
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = process.env.PUBLIC_URL + "/image-not-found.png";
        }}
      ></img>

      {/* <button
        data-toggle="tooltip"
        data-placement="top"
        title="Shiny-fy!"
        onClick={(e) => {
          setShiny(!shiny);
          setImageLoaded(false);
          e.stopPropagation();
        }}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/shiny.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "22px",
          width: "22px",
          position: "absolute",
          top: "6%",
          left: "82%",
          borderRadius: "50%",
          cursor: "pointer",
          border: 0,
        }}
      ></button> */}

      {/* {imageLoaded && imageUnavailable && (
        <div
          className="lead"
          style={{
            fontSize: "15px",
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-20%, -50%)",
          }}
        >
          <strong>
            <em>One day it will load its way out...</em>
          </strong>
        </div>
      )} */}

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
