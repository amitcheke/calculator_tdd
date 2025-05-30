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

  describe("support for additional number separator - \\n", () => {
    it("should return 6 for valid input '1\\n2,3', with additional separator \\n ", () => {
      const result = add("1\n2,3");
      expect(result).toEqual(6);
    });
  });

  describe("Support different delimiters like ;", () => {
    it("should return 3 for '//;\n1;2' where default delimiter is ';'", () => {
      const result = add("//;\n1;2");
      expect(result).toEqual(3);
    });
  });
});
