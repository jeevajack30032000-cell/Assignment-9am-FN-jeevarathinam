// Create a settings panel where const holds defaults and let changes user preferences.
const defaultsettings = {
    theme: "light",
    fontSize: 14,
    notifications: true
};
console.log("Default Settings:", defaultsettings);
let usersettings = { ...defaultsettings };
console.log("User Settings before change:", usersettings);
usersettings.theme = "dark";
usersettings.fontSize = 16;
console.log("User Settings after change:", usersettings);
// Note: We cannot reassign defaultsettings to a new object.

