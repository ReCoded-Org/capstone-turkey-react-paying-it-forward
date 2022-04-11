import React from "react";
import Signup from "../components/Signup";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Signup", () => {
  it("matches", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});