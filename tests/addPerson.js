const name = `Person ${Math.floor(Math.random() * 100000)}`;
console.log("Name:", name);

module.exports = {
  "1. Add a new person": function (browser) {
    browser
      .url("http://localhost:4200/home")
      .waitForElementVisible("body")
      .assert.visible("form")
      .setValue("input[name=name]", name)
      .setValue("input[name=age]", 20)
      .setValue("input[name=weight]", 150)
      .click("button[type=submit]")
      .waitForElementVisible("simple-snack-bar")
      .assert.containsText("simple-snack-bar", name)
      .assert.containsText("mat-expansion-panel", name);
  },
  "2. Add same person again": function (browser) {
    browser.assert
      .visible("form")
      .setValue("input[name=name]", name)
      .setValue("input[name=age]", 25)
      .setValue("input[name=weight]", 150)
      .click("button[type=submit]")
      .waitForElementVisible("mat-error")
      .assert.containsText(
        "mat-error",
        `There was a problem adding ${name}: A person with name ${name} already exists`
      );
  },
  "3. Check if person is present in the visual graph": function (browser) {
    browser
      .click("button#visualize-btn")
      .waitForElementVisible("svg")
      .waitForElementVisible("circle")
      .assert.containsText("svg", name)
      .end();
  },
};
