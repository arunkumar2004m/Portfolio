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


let touchStartY = 0;

document.addEventListener("touchstart", function (event) {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchend", function (event) {
    let touchEndY = event.changedTouches[0].clientY;
    if (touchEndY - touchStartY > 100) { // Swipe down detected
        location.reload(); // Refresh the page
    }
});


document.addEventListener("touchmove", function(event) {
    event.preventDefault(); // This prevents pull-to-refresh, remove it to enable
}, { passive: false });


        
      