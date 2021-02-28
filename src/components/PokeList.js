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

    // const placeReqeuests = resData => {
    //   let pDL = new Array(20);

    //   for (let i = 0; i < 20; i++) {
    //     axios.get(resData.results[i].url, {
    //       cancelToken: source.token,
    //     })
    //     .then(res => {
    //       pDL[i] = (pokeRes.data);
    //     })
    //   }
    // }

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
            let bug = false; // handling the #61 bug in pokeAPI.
            if (resData.results[i].name === "poliwhirl") bug = true;

            requestList[i] = axios.get(
              `${resData.results[i].url}`.slice(0, -1) + (bug ? "/" : ""),
              {
                cancelToken: source.token,
              }
            );
          }

          console.log("requestList", requestList);

          await axios.all(requestList).then(
            axios.spread((...responses) => {
              console.log("responses", responses);
              for (let i = 0; i < resData.results.length; i++) {
                pokemonDataList[i] = responses[i].data;
              }
            })
          );

          console.log("pokemonDataList", pokemonDataList);
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

  console.log(currentList);

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

export default React.memo(PokeList);
