import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import HashLoader from "react-spinners/HashLoader";

function PokeList({ curURL, setCurURL, shiny, setShiny }) {
  const [currentList, setcurrentList] = useState([]);
  const [prevURL, setPrevURL] = useState(null);
  const [nextURL, setNextURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let source = axios.CancelToken.source();
    setError(false);

    const getList = async (curURL) => {
      setLoading(true);

      try {
        const res = await axios.get(curURL, {
          cancelToken: source.token,
        });
        const resData = res.data;
        setPrevURL(resData.previous);
        setNextURL(resData.next);

        const requestList = new Array(20);
        const pokemonDataList = new Array(20);

        try {
          for (let i = 0; i < resData.results.length; i++) {
            requestList[i] = axios.get(resData.results[i].url, {
              cancelToken: source.token,
            });
          }

          await axios.all(requestList).then(
            axios.spread((...responses) => {
              for (let i = 0; i < resData.results.length; i++) {
                pokemonDataList[i] = responses[i].data;
              }
            })
          );

          setcurrentList(pokemonDataList);
          setLoading(false);
        } catch (err) {
          if (!axios.isCancel(err)) {
            setError(true);
            throw err;
          }
        }
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(true);
          throw err;
        }
      }
    };

    getList(curURL);

    return () => {
      source.cancel();
    };
  }, [curURL]);

  const onPrevClick = async () => {
    setCurURL(prevURL);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onNextClick = async () => {
    setCurURL(nextURL);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      {loading && !error && (
        <div className="d-flex justify-content-center">
          <HashLoader loading={loading} size={40} />
        </div>
      )}

      {error && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <img
            src={process.env.PUBLIC_URL + "/surprised-pikachu.jpg"}
            alt="Surprised pikachu - error"
            width="50"
            height="60"
          ></img>
          <strong>
            {" "}
            Error at PokeAPI end! Try going to the next or previous page.
          </strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {!loading && (
        <div>
          <div className="row">
            {currentList.map((pokemonData) => (
              <div className="col-auto m-auto" key={pokemonData.name}>
                <PokeCard
                  pokemonData={pokemonData}
                  pokemonTypes={pokemonData.types.map((t) => t.type.name)}
                  fromList={true}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom py-1">
        <div className="m-auto">
          {prevURL && (
            <button
              className="btn btn-md btn-light my-2 my-sm-0 mr-2"
              onClick={onPrevClick}
            >
              Previous
            </button>
          )}
          {nextURL && (
            <button
              className="btn btn-md btn-light my-2 my-sm-0"
              onClick={onNextClick}
            >
              Next
            </button>
          )}
        </div>
        <button
          className={`btn  btn-md btn${
            shiny ? "" : "-outline"
          }-warning my-2 my-sm-0 mr-2`}
          onClick={() => setShiny(!shiny)}
          style={{ width: "88px" }}
        >
          {shiny ? "Shinified" : "Shinify"}
        </button>
      </nav>
    </div>
  );
}

export default React.memo(PokeList);
