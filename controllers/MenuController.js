const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
    constructor() {
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Date",
                    "Exit"
                ]
            }
        ];
        this.book = new ContactController();
    }

    main() {
        console.log('Welcome to AddressBloc!');
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch (response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;
<<<<<<< HEAD
=======
                case "Date":
                    this.getDate();
                    break;
>>>>>>> prompt-menu-a
                case "Exit":
                    this.exit();
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }

    clear() {
        console.log("\x1Bc");
    }

    addContact() {
        this.clear();
        inquirer.prompt(this.book.addContactQuestions).then((answers) => {
            this.book.addContact(answers.name, answers.phone).then((contact) => {
                console.log("Contact added successfully!");
                this.main();
            }).catch((err) => {
                console.log(err);
                this.main();
            });
        });
    }

    exit() {
        console.log('Thanks for using AddressBloc!');
        process.exit();
    }

<<<<<<< HEAD
    getContactCount() {
        return this.contacts.length;
    }
=======
    getDate() {
        this.clear();
        const date = new Date();
        console.log(date);
        this.main();
    }



>>>>>>> prompt-menu-a
}
