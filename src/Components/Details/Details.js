import React from "react";
import { Link } from "react-router-dom";
import usePolling from "../../hooks/usePolling";

function Details({ detailsUrl }) {
  const [data, isLoading, hasError] = usePolling(detailsUrl, 400, {});
  const num = parseInt(detailsUrl.replace(/\D+/g, ""));
  return (
    <>
      {isLoading ? (
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
              <h5 className="card-title">{data && data.title}</h5>
              <p className="card-text">{data && data.opening_crawl}</p>
            </div>
            <Link to={`/review/${num}`} className="btn btn-primary">
              Написать отзыв
            </Link>
          </div>
        </>
      )}
    </>
  );
}
export default Details;
