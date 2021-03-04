import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Main from "../containers/Main";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Main}/>
      </BrowserRouter>
    );
  }
}

