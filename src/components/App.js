import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <div className="container">
    <div className="row">
      <div className="column">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="column">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  </div>
);

export default App;
