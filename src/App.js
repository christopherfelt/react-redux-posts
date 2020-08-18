import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostsForm from "./components/PostsForm";

import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <PostsForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}
