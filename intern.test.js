const intern = require("./intern")

test('Return school', () => {
    const testResponse = "school" ;
    const i = new intern ();
    expect(i.getschool().toBe(testResponse))
});

test('Return role', () => {
    const testResponse = "intern";
    const i = new intern();
    expect(i.getrole().toBe(testResponse))
});