import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "../../../Utils";

const setUp = (props = {}) => shallow(<Header {...props} />);

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
  it("Sould render a Logo", () => {
    const wrapper = findByTestAtrr(component, "logoImg");
    expect(wrapper.length).toBe(1);
  });
});
