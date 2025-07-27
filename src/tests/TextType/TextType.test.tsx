import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextType from "../../components/TextType/TextType";

jest.mock("gsap", () => ({
	gsap: {
		set: jest.fn(),
		to: jest.fn(),
	},
}));

describe("TextType", () => {
	it("renders component container", () => {
		render(<TextType text="Hello World" />);

		const container = screen.getByText("|").closest("div");
		expect(container).toBeInTheDocument();
	});

	it("renders as h1 when specified", () => {
		render(
			<TextType
				text="Title"
				as="h1"
			/>
		);

		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
	});

	it("renders as paragraph when specified", () => {
		render(
			<TextType
				text="Paragraph text"
				as="p"
			/>
		);

		const paragraph = document.querySelector("p");
		expect(paragraph).toBeInTheDocument();
	});

	it("shows cursor by default", () => {
		render(<TextType text="Test" />);

		const cursor = screen.getByText("|");
		expect(cursor).toBeInTheDocument();
	});

	it("hides cursor when showCursor is false", () => {
		render(
			<TextType
				text="Test"
				showCursor={false}
			/>
		);

		const cursor = screen.queryByText("|");
		expect(cursor).not.toBeInTheDocument();
	});

	it("applies custom className", () => {
		render(
			<TextType
				text="Test"
				className="custom-class"
			/>
		);

		const container = document.querySelector(".custom-class");
		expect(container).toBeInTheDocument();
	});
});
