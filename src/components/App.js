import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

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
      <HashRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </HashRouter>
    </div>
  );
};

export default App;
