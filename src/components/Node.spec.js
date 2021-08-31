import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import Node from "./Node";
import Block from "./Block";

describe("<Node />", () => {
  const nodes = {
    list: [
      {
        url: "https://thawing-springs-53971.herokuapp.com",
        online: false,
        name: "Node 1",
        loading: false,
      },
      {
        url: "https://secret-lowlands-62331.herokuapp.com",
        online: false,
        name: "Node 2",
        loading: false,
      },
    ],
  };

  let props = {
    toggleNodeExpanded: jest.fn(),
    expanded: true,
    node: {
    url: "https://thawing-springs-53971.herokuapp.com",
    online: false,
    name: "Node 1",
    loading: false,
  }
  };

  it("should contain .makeStyles-root-2 wrapper", () => {
    const component = shallow(<Node {...props} />);
    const wrapper = component.find(".makeStyles-root-2");
    expect(wrapper.length).toBe(1);
  });

  it("should match snapshot", () => {
    const component = create(
      <Node {...props}>
        <Block />
      </Node>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
