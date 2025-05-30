import add from "./calculator";
describe("String Calculator", () => {
  describe("Basic string calculator", () => {
    it("should return 0 for an empty string", () => {
      const result = add("");
      expect(result).toEqual(0);
    });
    it("should return 1 for single number '1'", () => {
      const result = add("1");
      expect(result).toEqual(1);
    });
    it("should return 3 for multiple numbers '1,2'", () => {
      const result = add("1,2");
      expect(result).toEqual(3);
    });
    it("should return 6 for multiple numbers '1,2,3'", () => {
      const result = add("1,2,3");
      expect(result).toEqual(6);
    });
  });
});
