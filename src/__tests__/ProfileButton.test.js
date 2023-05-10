import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileButton from "../components/ProfileButton";

describe("ProfileButton", () => {
  it("renders profile button with user icon", () => {
    render(<ProfileButton />);
    const buttonElement = screen.getByRole("button");
    const iconElement = screen.getByTestId("fa-user-icon");

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(buttonElement).toContainElement(iconElement);
  });
});
