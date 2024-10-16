import users from "./users.json";

function addUser(newName, newEmail, newPass) {
    const newId = (users.length + 1).toString();
    const newData = {
        name: newName,
        email: newEmail,
        password: newPass,
        id: newId,
    }
    users.push(newData);
    return newData;
}

export default addUser;