// Tests for functions:

describe("Contact", function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });
});
