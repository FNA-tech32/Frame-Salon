import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Switch>
      <Route exact path="/contacts.html" component={Contacts} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/blog-post.html" component={BlogPost} />
      <Route exact path="/index.html" component={Blog} />
      <Route exact path="/" component={Blog} />
    </Switch>
  );
}

export default App;
