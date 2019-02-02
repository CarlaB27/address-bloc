const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();

const questions = [
    {
        type: "list",
        name: "status",
        message: "Are you hungry?",
        choices: [
            "yes",
            "no"
        ]
    }
]

inquirer.prompt(questions).then((answers) => {
    if (answers.status === "yes") {
        console.log("Get up and eat!");
    } else {
        console.log("Get back to work!");
    }
})
    .catch((err) => {
        console.log(err);
    });