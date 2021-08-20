import React from "react";
import { shallow } from "enzyme";
import Login from "../../pages/Login";

describe("Test para pages/Login", () => {
  test("Se debe renderizar el componente Login", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
