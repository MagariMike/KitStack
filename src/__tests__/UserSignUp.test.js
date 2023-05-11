import React from "react";
import { render, screen } from "@testing-library/react";
import UserSignUp from "../googleLogin/UserSignUp";

describe("UserSignUp", () => {
  xit("UserSignUp renders in the browser", () => {
    render(<UserSignUp />);
    const firstNameLabel = screen.getByLabelText(/First Name:/i);
    expect(firstNameLabel).toBeInTheDocument();
  });
});

describe("Input placeholder text", () => {
  xit("renders first name placeholder text", () => {
    render(<UserSignUp />);
    const firstNamePlaceholder = screen.getByPlaceholderText(
      /enter your first name/i
    );
    expect(firstNamePlaceholder).toBeInTheDocument();
  });
  xit("renders last name placeholder text", () => {
    render(<UserSignUp />);
    const lastNamePlaceHolder =
      screen.getByPlaceholderText(/enter your last name/i);
    expect(lastNamePlaceHolder).toBeInTheDocument();
  });
  xit("renders password placeholder text", () => {
    render(<UserSignUp />);
    const passwordPlaceholder =
      screen.getByPlaceholderText(/enter your password/i);
    expect(passwordPlaceholder).toBeInTheDocument();
  });
  xit("renders email placeholder text", () => {
    render(<UserSignUp />);
    const emailPlaceholder = screen.getByPlaceholderText(/enter your email/i);
    expect(emailPlaceholder).toBeInTheDocument();
  });
});
