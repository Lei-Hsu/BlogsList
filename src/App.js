import { React, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import HomePage from "./conponents/HomePage";
import Create from "./conponents/Create";
import Detail from "./conponents/Detail";

import useFetch from "./customhooks/useFetch";

function App() {
  const [blogs, setBlogs] = useState(null);
  //用客製化的hook fetch server
  useFetch("https://blogsserver.herokuapp.com/", setBlogs);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            {blogs && <HomePage blogs={blogs} />}
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/:id">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
