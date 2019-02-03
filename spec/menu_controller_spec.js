const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
    beforeEach(() => {
        this.menu = new MenuController();
    });
    describe("#remindMe()", () => {
        it("should print learning message", () => {
            expect(this.menu.remindMe()).toBeDefined();
        });
    });
});