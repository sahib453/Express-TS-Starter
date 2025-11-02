import { getInitials } from "#utils/initials";
import { describe, expect, it } from "vitest";


describe("Initials function", () => {
    it("Should return the initials of a name", () => {
        expect(getInitials("sahib singh")).toBe('SS');
    })
})