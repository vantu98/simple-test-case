import { render, fireEvent } from "@testing-library/react";
import UserForm from "../pages/components/UserForm";
// input name
const inputInvalid = "Field is required";
const setupe = () => {
  const utils = render(<UserForm />);
  const form = utils.getByTestId("form");
  const inputName = utils.getByTestId("inputName");
  const inputEmail = utils.getByTestId("inputEmail");
  return {
    form,
    inputName,
    inputEmail,
    ...utils,
  };
};

describe("Input name invalid", () => {
  test("Show error when name is empty", () => {
    const { form, inputName, getByText } = setupe();
    fireEvent.change(inputName, { target: { value: "" } });
    fireEvent.submit(form);
    expect(getByText(inputInvalid)).toBeDefined();
  });
});

describe("Input name valid", () => {
  test("Show nothing when name is valid", () => {
    const { form, inputName } = setupe();
    fireEvent.change(inputName, { target: { value: "username" } });
    fireEvent.submit(form);
  });
});
