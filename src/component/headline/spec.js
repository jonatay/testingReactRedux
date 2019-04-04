import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAtrr } from "../../../Utils";

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = { header: "Test Header", desc: "Whatever" };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render a Description", () => {
      const desc = findByTestAtrr(wrapper, "descWrapper");
      expect(desc.length).toBe(1);
    });
  });
  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      //const props = { header: "Test Header", desc: "Whatever" };
      wrapper = setUp();
    });
    it("Should NOT render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
