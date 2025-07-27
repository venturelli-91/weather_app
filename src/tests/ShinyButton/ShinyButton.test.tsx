import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ShinyButton from "../../components/ShinyButton/ShinyButton";

describe("ShinyButton", () => {
	it("renders with text", () => {
		render(<ShinyButton>Click me</ShinyButton>);

		expect(
			screen.getByRole("button", { name: "Click me" })
		).toBeInTheDocument();
	});

	it("calls onClick when clicked", async () => {
		const user = userEvent.setup();
		const mockClick = jest.fn();

		render(<ShinyButton onClick={mockClick}>Button</ShinyButton>);

		await user.click(screen.getByRole("button"));

		expect(mockClick).toHaveBeenCalledTimes(1);
	});

	it("is disabled when disabled prop is true", () => {
		render(<ShinyButton disabled>Disabled</ShinyButton>);

		expect(screen.getByRole("button")).toBeDisabled();
	});

	it("applies custom className", () => {
		render(<ShinyButton className="custom-class">Button</ShinyButton>);

		expect(screen.getByRole("button")).toHaveClass("custom-class");
	});
});
