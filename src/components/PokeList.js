import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import HashLoader from "react-spinners/HashLoader";

function PokeList() {
  const [curURL, setCurURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [currentList, setcurrentList] = useState([]);
  const [prevURL, setPrevURL] = useState(null);
  const [nextURL, setNextURL] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let source = axios.CancelToken.source();

    const getList = async (curURL) => {
      setLoading(true);

      try {
        const res = await axios.get(curURL, {
          cancelToken: source.token,
        });
        const resData = res.data;
        setPrevURL(resData.previous);
        setNextURL(resData.next);

        const pokemonDataList = [];

        try {
          for (let i = 0; i < resData.results.length; i++) {
            const pokeRes = await axios(resData.results[i].url, {
              cancelToken: source.token,
            });

            pokemonDataList.push(pokeRes.data);
          }

          setcurrentList(pokemonDataList);
          setLoading(false);
        } catch (err) {
          if (!axios.isCancel(err)) throw err;
        }
      } catch (err) {
        if (!axios.isCancel(err)) throw err;
      }
    };

    getList(curURL);

    return () => {
      source.cancel();
    };
  }, [curURL]);

  const onPrevClick = async () => {
    setCurURL(prevURL);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const onNextClick = async () => {
    setCurURL(nextURL);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="container">
      {loading && (
        <div className="d-flex justify-content-center">
          <HashLoader loading={loading} size={40} />
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
      </nav>
    </div>
  );
}

export default PokeList;
