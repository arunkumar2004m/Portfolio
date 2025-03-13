// JavaScript for Mobile Menu Toggle

var side = document.querySelector(".sidebar");

function showbar() {
    side.style.left = "0";
}
function closebar() {
    side.style.left = "-60%";
}

function about() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function project() {
    document.getElementById("project").scrollIntoView({ behavior: "smooth" });
}

function skill() {
    document.getElementById("skill").scrollIntoView({ behavior: "smooth" });

}

function contact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}



// JavaScript for Redirecting to Another Page

document.addEventListener("DOMContentLoaded", function() {
   

    document.querySelectorAll(".click-button1").forEach(button => {
        button.addEventListener("click", function() {
            alert("Redirecting to Love Calculator in 3 seconds...");
            setTimeout(function() {
                window.location.href = "https://arunkumar2004m.github.io/Love-Calculator/";
            }, 2000);
       });
    });
});
