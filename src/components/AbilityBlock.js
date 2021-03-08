import React from "react";

const getColor = (a) => {
  return a.is_hidden ? "black" : "white";
};

function AbilityBlock({ a }) {
  return (
    <a
      // data-toggle="tooltip"
      // title="Tooltip on top"
      // data-animation="true"
      className="badge align-middle mr-1 "
      style={{
        color: `${getColor(a)}`,
        fontSize: "9px",
        maxWidth: "8em",
        height: "2.5em",
        whiteSpace: "normal",
        border: `0.5px solid ${getColor(a)}`,
        alignItems: "center",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      {`${a.ability.name}`.toUpperCase().replace(/-/gi, " ") + " "}
    </a>
  );
}

export default React.memo(AbilityBlock);
