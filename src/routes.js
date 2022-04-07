import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => <h1>Appppp</h1>;
const Items = () => <h1>Items</h1>;
const Donators = () => <h1>Donators</h1>;
const Pricing = () => <h1>Pricing</h1>;
const About = () => <h1>About us</h1>;
const QA = () => <h1>QA</h1>;
const MissingPage = () => <h1>404</h1>;

const routes = (
    <Routes>
      <Route exact path="/" component={App}/>
      <Route path="/items" exact component={Items} />
      <Route path="/about" component={About} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/donator" component={Donators} />
      <Route path="/qa" component={QA} />
      <Route component={MissingPage} />
    </Routes>
  );
  
  export default routes;