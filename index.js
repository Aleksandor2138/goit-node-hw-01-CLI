const argv = require("yargs").argv;
const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
} = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contactLists = listContacts();
            console.table(contactLists);
        break;

        case "get":
            const getContact = getContactById(id.toString());
            console.table(getContact);
        break;

        case "add":
            const newContact = addContact(name, email, phone);
            console.table(newContact);
        break;

        case "remove":
            const delContact = removeContact(id);
            console.table(delContact);
        break;

        default:
        console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);