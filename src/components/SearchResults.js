import React, { useEffect } from "react";

function SearchResults({
  matches,
  handleSearch,
  resultsVisible,
  setResultsVisible,
  formRef,
  resultsRef,
  inputRef,
}) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setResultsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyPress = (event) => {
    const cur = event.target;

    if (event.which == "40" && cur.nextElementSibling) {
      cur.nextElementSibling.focus();
      event.preventDefault();
    } else if (event.which == "38") {
      cur.previousElementSibling
        ? cur.previousElementSibling.focus()
        : inputRef.current.focus();
      event.preventDefault();
    }
  };

  return (
    <div>
      {resultsVisible && (
        <div
          ref={resultsRef}
          style={{
            width: "203.6px",
            maxHeight: "125px",
            overflow: "auto",
            position: "absolute",
            zIndex: "10",
            border: "solid 1px black",
            borderRadius: "5px",
          }}
        >
          {matches.map((match, idx) => (
            <button
              className="btn btn-block m-0"
              id="search-recommendation"
              key={match}
              onClick={async () => {
                handleSearch(match);
              }}
              onKeyDown={handleKeyPress}
              style={{
                backgroundColor: idx % 2 === 0 ? "#f2f2f2" : "#e9ecef",
                borderTop: "solid 1px black",
                cursor: "pointer",
              }}
            >
              {`${match}`.toLocaleUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
