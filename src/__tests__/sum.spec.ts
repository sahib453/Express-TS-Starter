import { sum } from "#utils/sum";
import { describe, expect, it, } from "vitest";

describe("sum function", () => {
    it("should return the sum of 2 numbers", () => {
        expect(sum(6,7)).toBe(13);
    })
} )