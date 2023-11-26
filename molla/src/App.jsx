import React from "react";
import Pageheader from "./Components/Pageheader";
import "./App.css";
import Filtersection from "./Components/Filtersection";
import Sortsection from "./Components/Sortsection";

const App = () => {
  return (
    <>
      <div className="sections">
        <Pageheader mainTitle="salam" subTitle="Shop" />
        <div className="mainSection">
          <Filtersection />
          <Sortsection />
        </div>
      </div>
    </>
  );
};

export default App;
