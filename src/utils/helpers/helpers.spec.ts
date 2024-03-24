import "@testing-library/jest-dom";

import { toKebabCase } from "./helpers";

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
});
