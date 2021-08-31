import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import Block from "./Block";

describe("<Block />", () => {
  const blocks = {
    data: [
      {
        id: "5",
        type: "blocks",
        attributes: {
          index: 1,
          timestamp: 1530679678,
          data: "The Human Torch",
          "previous-hash": "KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=",
          hash: "oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc=",
        },
      },
      {
        id: "6",
        type: "blocks",
        attributes: {
          index: 2,
          timestamp: 1530679684,
          data: "is denied",
          "previous-hash": "oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc=",
          hash: "9xr57PW8RVzeOniNP2lPVzAOu97x12mpDgjv70z5vo4=",
        },
      },
      {
        id: "7",
        type: "blocks",
        attributes: {
          index: 3,
          timestamp: 1530679689,
          data: "a bank loan",
          "previous-hash": "9xr57PW8RVzeOniNP2lPVzAOu97x12mpDgjv70z5vo4=",
          hash: "YGLfNDMC2x2m5kwb3q+Ne/uCL4sFUnX/sQwzuwijx8A=",
        },
      },
    ],
  };


  it("should contain .makeStyles-block-1 wrapper", () => {
    const component = shallow(<Block />);
    const wrapper = component.find(".makeStyles-block-1");
    expect(wrapper.length).toBe(1);
  });

  it("should match snapshot", () => {
    const component = create(<Block></Block>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});
