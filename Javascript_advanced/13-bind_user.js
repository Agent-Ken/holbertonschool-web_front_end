const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Johns",
    location: "Netherlands",
    occupation: "Engineer",
};

function logWelcomeUser(welcomeString) {
    console.log(
        `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
    );
}

function bindFunction(func, context) {
    return function(...args) {
        return func.apply(context, args);
    };
}

const bindLogWelcomeUser = bindFunction(logWelcomeUser, user);
bindLogWelcomeUser('Welcome'); // "Welcome, Buillaume. Your occupation is: Engineer"
