import React, { useState } from "react";
import ListFilms from "./Components/ListFilms/ListFilms";
import Details from "./Components/Details/Details";
import Form from "./Components/Form/Form";
import "./App.css";
function App() {
  const [detailsUrl, setDetailsUrl] = useState();

  function getUrl(url) {
    setDetailsUrl(url);
  }
  return (
    <div className="App">
      <div className="container ">
        <h1 className="text-center">Star Wars</h1>
        <div className="row mt-4 position-relative">
          <ListFilms onGetUrl={getUrl} />
          {detailsUrl && <Details detailsUrl={detailsUrl} />}
        </div>
        <div className="row mt-4">
          <Form />
        </div>
      </div>
    </div>
  );
}
export default App;
