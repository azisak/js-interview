const { shorten } = require("../sample");

describe(`Shorten`, () => {
  it("should shorten the correct sentence", () => {
    const myStr = "Hello, my name is Kopiko, and I have a cat!";
    const ans = "H3o, my n2e is K4o, and I h2e a cat!";
    expect(shorten(myStr)).toEqual(ans);
  });

  it("should shorten the correct empty sentence", () => {
    expect(shorten("")).toEqual("");
  });

  it("should shorten a word", () => {
    expect(shorten("HelloWorlD")).toEqual("H8D");
  });
});
