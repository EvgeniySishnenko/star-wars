import React, { useEffect, useState } from "react";
import usePolling from "../../hooks/usePolling";

function ListFilms(props) {
  const [data, isLoading, hasError] = usePolling(
    "https://swapi.dev/api/films/",
    300,
    []
  );
  const [selected, setSelect] = useState({
    selected: "",
  });
  const list = data.results;

  function onGetUrl(e) {
    props.onGetUrl(e.target.dataset.url);
    setSelect({
      selected: e.target.dataset.url,
    });
  }

  return (
    <>
      <ul className="list-group col-3">
        {isLoading
          ? "Loading..."
          : list &&
            list.map((item) => {
              return (
                <li
                  onClick={onGetUrl}
                  key={item.url}
                  data-url={item.url}
                  className={`list-group-item ${
                    selected.selected === item.url ? "active" : ""
                  }`}
                >
                  {item.title}
                </li>
              );
            })}
      </ul>
    </>
  );
}
export default ListFilms;
