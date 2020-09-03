import React, { useEffect, useState } from "react";

function ListFilms(props) {
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((result) => {
        setList(result.results);
        setIsLoading(true);
      })
      .catch((e) => console.log(e))
      .finally(function () {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      });
  }, []);
  function onGetUrl(e) {
    props.onGetUrl(e.target.dataset.url);

    const wrapObj = document.querySelector(".list-group ");

    for (let i = 0; i < wrapObj.children.length; i++) {
      wrapObj.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
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
                  className="list-group-item"
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
