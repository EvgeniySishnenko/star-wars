import React, { useState } from "react";

import ListFilms from "../../Components/ListFilms/ListFilms";
import Details from "../../Components/Details/Details";
function Home() {
  const [detailsUrl, setDetailsUrl] = useState();

  function getUrl(url) {
    setDetailsUrl(url);
  }
  return (
    <div className="row mt-4 position-relative">
      <ListFilms onGetUrl={getUrl} />
      {detailsUrl && <Details detailsUrl={detailsUrl} />}
    </div>
  );
}

export default Home;
