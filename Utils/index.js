import checkPropTypes from "check-prop-types";
//import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./../src/reducers";
// import { middlewares } from "./../src/createStore";

export const findByTestAtrr = (component, attr) =>
  component.find(`[data-test='${attr}']`);

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
