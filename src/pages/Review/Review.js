import React from "react";
import { useRouteMatch } from "react-router-dom";
import usePolling from "../../hooks/usePolling";
import Form from "../../Components/Form/Form";

function Home() {
  const routeMatch = useRouteMatch();
  const [data] = usePolling(
    `https://swapi.dev/api/films/${routeMatch.params.id}/`,
    400,
    {}
  );
  return (
    <div className="container-form">
      <h2>{data.title}</h2>

      <Form data={data} />
    </div>
  );
}

export default Home;
