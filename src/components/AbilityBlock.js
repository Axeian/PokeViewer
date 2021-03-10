import React from "react";

const getColor = (a) => {
  return a.is_hidden ? "black" : "white";
};

function AbilityBlock({ a, desc }) {
  return (
    <a
      className="badge align-middle mr-1"
      container="body"
      tabIndex="0"
      role="button"
      data-toggle="popover"
      data-trigger="focus"
      title={a.is_hidden ? "Hidden Ability" : "Ability"}
      data-content={desc === undefined ? "<em>Loading...</em>" : `${desc}`}
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
        cursor: "pointer",
      }}
    >
      {`${a.ability.name}`.toUpperCase().replace(/-/gi, " ") + " "}
    </a>
  );
}

export default React.memo(AbilityBlock);
