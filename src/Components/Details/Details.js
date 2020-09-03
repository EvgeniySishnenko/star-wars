import React, { useEffect, useState, useRef } from "react";

function Details({ detailsUrl }) {
  const [info, setInfo] = useState();
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const infoRef = useRef();
  useEffect(() => {
    if (info) {
      infoRef.current = info.url;
    }

    if (infoRef.current !== Number(detailsUrl)) {
      fetch(`${detailsUrl}`)
        .then((response) => response.json())
        .then((result) => {
          setInfo(result);
          setIsLoadingDetails(true);
        })
        .catch((e) => console.log(e))
        .finally(function () {
          setTimeout(() => {
            setIsLoadingDetails(false);
          }, 500);
        });
    }
  }, [detailsUrl]);

  return (
    <>
      {isLoadingDetails ? (
        "Loading..."
      ) : (
        <>
          <div className="card position-absolute">
            <img
              src="http://placehold.it/250x200"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{info && info.title}</h5>
              <p className="card-text">{info && info.opening_crawl}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Details;
