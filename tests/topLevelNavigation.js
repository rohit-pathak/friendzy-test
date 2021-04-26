module.exports = {
  "Navigative to /home and visualize": function (browser) {
    browser
      .url("http://localhost:4200/home")
      .waitForElementVisible("body")
      .assert.visible("form")
      .assert.visible("button[type=submit]")
      .click("button#visualize-btn")
      .waitForElementVisible("svg")
      .assert.containsText("small", "Color intensity represents a person's age group (darker means older)")
      .end();
  },
};
