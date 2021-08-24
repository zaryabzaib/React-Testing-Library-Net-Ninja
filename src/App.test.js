import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

 test ("button has correct initial color", () => {
    render (<App/>);

    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    // click button
    fireEvent.click(colorButton);
    //expect background to be blue
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
    //expect button to be blue
    expect(colorButton.textContent).toBe('Change to red');
 })