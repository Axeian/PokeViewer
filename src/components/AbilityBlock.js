import React from "react";

const getColor = (a) => {
  return a.is_hidden ? "black" : "white";
};

function AbilityBlock({ a, idx }) {
  return (
    <a
      // data-toggle="tooltip"
      // title="Tooltip on top"
      // data-animation="true"
      className={`badge align-middle mr-1 list-group-item list-group-item-action
        ${idx === 0 ? " active" : ""} list-group-item-dark
      }`}
      id={"list-" + `${a.ability.name}` + "-list"}
      data-toggle="list"
      role="tab"
      href={`#list-${a.ability.name}`}
      aria-controls={`${a.ability.name}`}
      style={{
        fontSize: "9px",
        maxWidth: "8em",
        height: "2.5em",
        whiteSpace: "normal",
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
