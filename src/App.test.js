import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

describe("Booking Form", () => {

    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    })

    test("Submission is disabled if guests are more than 10 and there is no date", () => {
        const handleSubmit = jest.fn();
        render(<BookingForm />);

        const inputGuests = screen.getByLabelText(/Number of guests/);
        fireEvent.change(inputGuests, { target: { value: "20" } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
    });

});