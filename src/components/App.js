import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <button>
        <Link to="/pagetwo">Page Two</Link>
      </button>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>
        <Link to="/">Page One</Link>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
