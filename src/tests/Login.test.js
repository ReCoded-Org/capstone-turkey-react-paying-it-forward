import React from "react";
import Login from "../components/Login";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Login Component", () => {
  it("matches", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});