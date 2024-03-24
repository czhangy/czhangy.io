import "@testing-library/jest-dom";

import { convertDate, toKebabCase } from "./helpers";

describe("Helpers", () => {
    describe("toKebabCase", () => {
        it("Converts a normal string properly", () => {
            expect(toKebabCase("Test string")).toBe("test-string");
        });

        it("Converts a string with extra whitespace properly", () => {
            expect(toKebabCase("   Test   string   ")).toBe("test-string");
        });

        it("Converts a string with non-alphanumeric characters properly", () => {
            expect(toKebabCase("123Test$%^& *().string456")).toBe(
                "123test-string456",
            );
        });
    });

    describe("convertDate", () => {
        it("Handles null dates with an empty string", () => {
            expect(convertDate(null)).toBe("");
        });

        it("Returns the date in the correct format", () => {
            expect(convertDate(new Date("January 1, 2000"))).toBe("Jan 2000");
        });
    });
});
