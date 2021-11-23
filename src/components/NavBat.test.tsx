import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";
import App from "../App";

describe("NavBar component", () => {
  it("should input search be in document", () => {
    render(<NavBar />);
    const inputSearchField = screen.getByLabelText(/Search location/i);
    expect(inputSearchField).toBeInTheDocument();
  });
  it("should input search to have empty value", () => {
    render(<NavBar />);
    const inputSearchField = screen.getByLabelText(/Search location/i);
    expect(inputSearchField).toHaveValue("");
  });
  it('should input search to have "asdf" value', () => {
    render(<NavBar />);
    const inputSearchField = screen.getByLabelText(/Search location/i);
    userEvent.type(inputSearchField, "asdf");
    expect(inputSearchField).toHaveValue("asdf");
  });
});
