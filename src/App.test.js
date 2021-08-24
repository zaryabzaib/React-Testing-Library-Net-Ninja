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
 });

 test('initial conditions', () => {
    render(<App/>);
    const colorButton = screen.getByRole('button', { name: "Change to blue"});
    expect(colorButton).toBeEnabled();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

 })

 test('after conditions' , () => {
     render(<App/>);
     const colorButton = screen.getByRole("button", { name: "Change to blue"});
     const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
     
     fireEvent.click(checkbox);
     expect(colorButton).toBeDisabled();
     
     fireEvent.click(checkbox);
     expect(colorButton).toBeEnabled();
 });

 test('Disabled button has gray background and reverts to red' , () => {
     render(<App/>);
     const colorButton = screen.getByRole('button', { name: 'Change to blue' })
     const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

     //disable button
     fireEvent.click(checkbox);
     expect(colorButton).toHaveStyle('backgroundColor: gray');

     //re-enable button
     fireEvent.click(checkbox);
     expect(colorButton).toHaveStyle('backgroundColor: red')
 })

 test('Disabled button has gray background and reverts to red' , () => {
    render(<App/>);
    const colorButton = screen.getByRole('button', { name: 'Change to blue' })
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

    // change button to blue
    fireEvent.click(colorButton);

    //disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('backgroundColor: gray');  

    //re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('backgroundColor: blue')
}) 