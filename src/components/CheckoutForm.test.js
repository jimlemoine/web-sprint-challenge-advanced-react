import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    //Arrange
    render(<CheckoutForm />);

    //Act
    const firstnameInput = screen.getByLabelText("First Name:");
    userEvent.type(firstnameInput, "Bubba");
    const lastnameInput = screen.getByLabelText("Last Name:");
    userEvent.type(lastnameInput, "Gump");
    const addressInput = screen.getByLabelText("Address:");
    userEvent.type(addressInput, "123 Shrimp Lane");
    const cityInput = screen.getByLabelText("City:");
    userEvent.type(cityInput, "Greenbow");
    const stateInput = screen.getByLabelText("State:");
    userEvent.type(stateInput, "Alabama");
    const zipInput = screen.getByLabelText("Zip:");
    userEvent.type(zipInput, "12345");
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    await waitFor(() => {
        const nameFeedback = screen.queryByText("Bubba Gump");
        expect(nameFeedback).toBeInTheDocument();
        const addressFeedback = screen.queryByText("123 Shrimp Lane");
        expect(addressFeedback).toBeInTheDocument();
        const cityFeedback = screen.queryByText("Greenbow, Alabama 12345");
        expect(cityFeedback).toBeInTheDocument();
    })
});
