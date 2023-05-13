import React from "react";
import { render, screen } from "@testing-library/react";
import CreateItemButton from "../components/CreateItemButton";

describe("CreateItemButton", () => {
  it("renders create item button with plus icon", () => {
    render(<CreateItemButton />);
    const buttonElement = screen.getByRole("button");
    const iconElement = screen.getByTestId("fa-plus-icon");

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(buttonElement).toContainElement(iconElement);
  });
});
hello