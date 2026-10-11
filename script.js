
console.log("JavaScript is working!");


// ==========================================
// HOME NAVIGATION
// ==========================================

document.getElementById("homeLink").addEventListener("click", function () {

    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// ABOUT NAVIGATION
// ==========================================

document.getElementById("aboutLink").addEventListener("click", function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// SERVICES NAVIGATION
// ==========================================

document.getElementById("servicesLink").addEventListener("click", function () {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// CONTACT NAVIGATION
// ==========================================

document.getElementById("contactLink").addEventListener("click", function () {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// HERO - CONTACT ME BUTTON
// ==========================================

document.getElementById("heroContactBtn").addEventListener("click", function () {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// HERO - SERVICES BUTTON
// ==========================================

document.getElementById("heroServicesBtn").addEventListener("click", function () {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// EMAIL BUTTON
// ==========================================

document.getElementById("emailButton").addEventListener("click", function () {

    window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=var900903@gmail.com",
        "_blank"
    );

});


// ==========================================
// LEARN MORE BUTTONS
// ==========================================

let learnMoreButtons = document.querySelectorAll(".learnMoreBtn");

learnMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("More information about this project will be added soon!");

    });

});
