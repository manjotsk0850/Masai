function fetchUserData(url){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "Alice", email: "alice@example.com", age: 25},
                {id: 2, name: "Bob", email: "bob@example.com", age: 17},
                {id: 3, name: Charlie, email: "charlie@example.com", age: 30}
            ]);
        }, 1000);
    });
}

function processUsers(users, minAge){
    return users
        .filter(user => user.age >= minAge)
        .map(({name, email}) =>({name, email}));
}

function createUserManager(){
    let users = [];
    return{
        addUser(user){
            users = [...users, user];
        },
        getUsers(){
            return users.map(({name}) => ({name}));   
        },
        findUserByName(name){
            return users.find(user => user.name === name) ?? "User not found";
        }
    };
}

fetchUserData("https://api.example.com/users").then(fetchedUsers => {
    console.log("Fetched Users:", fetchedUsers);

    const processedUsers = processUsers(fetchedUsers, 18);
    console.log("Processed Users:", processedUsers);

    const userManager = createUserManager();
    processedUsers.forEach(user => userManager.addUser(user));

    console.log("User List:", userManager.getUsers());
    console.log("Find User 'Alice':", userManager.findUserByName("Alice"));
    console.log("Find User 'Bob':", userManager.findUserByName("Bob"));
});