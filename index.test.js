const translate = require("./index");

// INPUTS -> OUTPUT

// apple -> appleway
// else -> elseway
// ice -> iceway
// owl -> owlway
// under -> underway

// giraffe -> iraffegay
// bowl -> owlbay

// stair -> airstay

// straight -> aightstray

// Apple -> appleway

describe("translate function", () => {

    test("3-letter vowel - o", () => {
        const result = translate("owl");
        expect(result).toEqual("owlway");
    });

    test("3-letter vowel - i", () => {
        const result = translate("ice");
        expect(result).toEqual("iceway");
    });

    test("4-letter vowel - e", () => {
        const result = translate("else");
        expect(result).toEqual("elseway");
    });

    test("5-letter vowel - a", () => {
        const result = translate("apple");
        expect(result).toEqual("appleway");
    });

    test("5-letter vowel - u", () => {
        const result = translate("under");
        expect(result).toEqual("underway");
    });

    test("4-letter 1-const", () => {
        const result = translate("bowl");
        expect(result).toEqual("owlbay");
    });

    test("7-letter 1-const", () => {
        const result = translate("giraffe");
        expect(result).toEqual("iraffegay");
    });

    test("5-letter 2-const", () => {
        const result = translate("stair");
        expect(result).toEqual("airstay");
    });

    test("8-letter 3-const", () => {
        const result = translate("straight");
        expect(result).toEqual("aightstray");
    });

    test("5-letter caps", () => {
        const result = translate("Apple");
        expect(result).toEqual("appleway");
    });
    
});