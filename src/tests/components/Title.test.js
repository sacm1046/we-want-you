import React from "react";
import { shallow } from "enzyme";
import Title from "../../components/title/Title";

describe("Test para components/title/Title", () => {
  const title = "Título de prueba";
  const subTitle = "Sub título de prueba";
  const wrapper = shallow(<Title title={title} subTitle={subTitle} />);

  test("Se debe renderizar el componente Title", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Se debe mostrar el sub título enviado por props", () => {
    const foundSubTitle = wrapper.find("h2").text();
    expect(foundSubTitle).toBe(subTitle);
  });

  test("El título del componente debe recibir la props de title", () => {
    const foundTitle = wrapper.find("h1");
    expect(foundTitle.text().trim()).toBe(title);
  });

  test("El título del componente debe contener la clase msg-header", () => {
    const foundTitle = wrapper.find("h1");
    expect(foundTitle.prop("className")).toBe("msg-header");
  });
});
