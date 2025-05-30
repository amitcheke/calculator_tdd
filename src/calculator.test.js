import add from "./calculator";
describe("String Calculator", () => {
  describe("Basic string calculator", () => {
    it("should return 0 for an empty string", () => {
      const result = add("");
      expect(result).toEqual(0);
    });
  });
});
