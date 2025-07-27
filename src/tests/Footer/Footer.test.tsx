import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../components/Footer/Footer";

describe("Footer", () => {
	it("renders copyright text", () => {
		render(<Footer />);

		expect(screen.getByText("© 2025")).toBeInTheDocument();
		expect(screen.getByText("Flowbite")).toBeInTheDocument();
	});

	it("renders navigation links", () => {
		render(<Footer />);

		expect(screen.getByText("About me")).toBeInTheDocument();
		expect(screen.getByText("Projects")).toBeInTheDocument();
		expect(screen.getByText("Contact")).toBeInTheDocument();
	});

	it("renders social media icons", () => {
		render(<Footer />);

		const icons = document.querySelectorAll('svg[class*="cursor-pointer"]');
		expect(icons).toHaveLength(2); // LinkedIn and GitHub icons
	});

	it("has proper footer structure", () => {
		render(<Footer />);

		const footer = screen.getByRole("contentinfo");
		expect(footer).toBeInTheDocument();
		expect(footer).toHaveAttribute("data-testid", "flowbite-footer");
	});
});
