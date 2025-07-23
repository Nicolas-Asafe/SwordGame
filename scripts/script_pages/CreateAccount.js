import SectionUserData from "../user/data_user.js";

const user = new SectionUserData("Undefined User");

function registerUser(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    if (username) {
        user.SetName(username);
        alert("Account created successfully!");
        window.location.href = "index.html";
    } else {
        alert("Please enter a username.");
    }
}

const form = document.querySelector(".RegisterForm");
if (form) {
    form.addEventListener("submit", registerUser);
}

function User(){
    return user;
}
export default User;
