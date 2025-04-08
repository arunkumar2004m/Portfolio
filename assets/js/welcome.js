const welcomeElement = document.querySelector(".welcome");
const time = new Date().getHours();

if (time < 12) {
    welcomeElement.textContent = "Good Morning";
} else if (time < 18) {
    welcomeElement.textContent = "Good Afternoon";
} else if (time < 20) {
    welcomeElement.textContent = "Good Evening";
}
else {
    welcomeElement.textContent = "Good Night";
}



