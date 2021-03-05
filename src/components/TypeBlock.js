import React from "react";

export function getColor(type) {
  let bgColor = "black",
    color = "white";

  switch (type) {
    case "bug":
      bgColor = "#729f3f";
      break;
    case "dragon":
      bgColor = "#fccbad";
      color = "black";
      break;
    case "fairy":
      bgColor = "#fdb9e9";
      color = "black";
      break;
    case "fire":
      bgColor = "#fd7d24";
      break;
    case "ghost":
      bgColor = "#7b62a3";
      break;
    case "ground":
      bgColor = "#774629";
      break;
    case "normal":
      bgColor = "#a4acaf";
      color = "black";
      break;
    case "psychic":
      bgColor = "#f366b9";
      break;
    case "steel":
      bgColor = "#9eb7b8";
      color = "black";
      break;
    case "dark":
      bgColor = "#707070";
      break;
    case "electric":
      bgColor = "#eed535";
      color = "black";
      break;
    case "fighting":
      bgColor = "#d56723";
      break;
    case "flying":
      bgColor = "#3dc7ef";
      color = "black";
      break;
    case "grass":
      bgColor = "#9bcc50";
      color = "black";
      break;
    case "ice":
      bgColor = "#51c4e7";
      color = "black";
      break;
    case "poison":
      bgColor = "#b97fc9";
      break;
    case "rock":
      bgColor = "#a38c21";
      break;
    case "water":
      bgColor = "#4592c4";
      break;
    case "none":
      bgColor = "white";
      color = "black";
      break;
    default:
      break;
  }
  return [color, bgColor];
}

const getStyle = (type) => {
  const [color, bgColor] = getColor(type);

  return {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    display: "inline-block",
    height: "17px",
    width: "73px",
    fontSize: "11px",
    borderRadius: "3px",
    margin: "1px",
    border: `1px solid ${color}`,
  };
};

function TypeBlock({ type }) {
  return (
    <div className="col" style={getStyle(type)}>
      {`${type}`.toUpperCase()}
    </div>
  );
}

export default React.memo(TypeBlock);
