import React from "react";
import { HashRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <HashRouter>
        <Route path="/" component={Header} />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </HashRouter>
    </div>
  );
};

export default App;
