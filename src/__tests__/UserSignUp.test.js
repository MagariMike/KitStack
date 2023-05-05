import React from "react";
import { render, screen } from "@testing-library/react";
import UserSignUp from "../googleLogin/UserSignUp";

describe('UserSignUp', () => {
    it("UserSignUp renders in the browser", () => {
        render(<UserSignUp />);
        const firstNameLabel = screen.getByLabelText(/First Name:/i);
        expect(firstNameLabel).toBeInTheDocument();
    });
});

describe('Input placeholder text', () => {
    it("renders first name placeholder text", () => {
        render(<UserSignUp />);
        const firstNamePlaceholder = screen.getByPlaceholderText(/enter your first name/i);
        expect(firstNamePlaceholder).toBeInTheDocument();
    })
    it("renders last name placeholder text", () => {
        render(<UserSignUp />);
        const lastNamePlaceHolder = screen.getByPlaceholderText(/enter your last name/i);
        expect(lastNamePlaceHolder).toBeInTheDocument();
    })
    it("renders password placeholder text", () => {
        render(<UserSignUp />);
        const passwordPlaceholder = screen.getByPlaceholderText(/enter your password/i);
        expect(passwordPlaceholder).toBeInTheDocument();
    })
    it("renders email placeholder text", () => {
        render(<UserSignUp />);
        const emailPlaceholder = screen.getByPlaceholderText(/enter your email/i);
        expect(emailPlaceholder).toBeInTheDocument();
    })
})
 