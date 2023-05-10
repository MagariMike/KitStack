import React from "react";
import { render, screen } from "@testing-library/react";
import LogoutButton from "../components/LogoutButton";

describe("LogoutButton", () => {
  it("renders logout button with right-from-bracket icon", () => {
    render(<LogoutButton />);
    const buttonElement = screen.getByRole("button");
    const iconElement = screen.getByTestId("fa-right-from-bracket-icon");

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(buttonElement).toContainElement(iconElement);
  });
});
