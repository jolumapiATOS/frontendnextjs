import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from '../Navbar';

test('The Navbar is rendering', () => {
    render(<Navbar />);
    const link = screen.getByText(/about me/i);
    expect(link).toBeInTheDocument();
 });