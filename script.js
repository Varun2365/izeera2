

var submit = document.getElementById("submit-button");
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;

}



var tech = document.querySelectorAll(".swap");
var image = document.querySelector(".hero-right");
var imageArray = ['url(assets/images/01.webp)', 'url(assets/images/02.webp)', 'url(assets/images/03.webp)']
var imageArray2 = ['url(assets/images/2.jpg)','url(assets/images/3.jpg)','url(assets/images/4.jpg)']
setInterval(() => {
    image.style.opacity = 0;
    image.style.backgroundImage = getRandomItem(imageArray);
    image.style.opacity = 1;

}, 2000);
var light = document.querySelector('.lightning-results-left');
setInterval(() => {
    light.style.opacity = 0;
    light.style.backgroundImage = getRandomItem(imageArray2);
    light.style.opacity = 1;
}, 5000);







ScrollReveal({
    reset: false,
    distance: '20px',
    duration: 1000,
    delay: 400  
})
ScrollReveal().reveal('.left-hero',{delay: 100})
ScrollReveal().reveal('.right',{delay: 100})
ScrollReveal().reveal('.text',{delay: 100, origin: 'right', interval: 300})
ScrollReveal().reveal('.heading-roll',{delay: 300})
ScrollReveal().reveal('.heading-2',{delay: 600})
ScrollReveal().reveal('.para',{delay: 900})
ScrollReveal().reveal('.nav',{delay: 100, origin: 'top'})
ScrollReveal().reveal('.web-card', {interval: 10});
ScrollReveal().reveal('.service-card', {delay: 800,interval: 200});
ScrollReveal().reveal('.service-heading', {interval: 200, origin: "left"});
ScrollReveal().reveal('.form-reveal', {interval: 200, origin: "right"});
ScrollReveal().reveal('.feel', {interval: 200, origin: "left"});
ScrollReveal().reveal('.why-card', {interval: 300, origin: "left"});
ScrollReveal().reveal('.choose');
ScrollReveal().reveal('.footer-card', {interval: 200, origin: "bottom"});
// ScrollReveal().reveal('.mobile-anim', {interval: 200});
function validate(name,phone,mail,msg){
    if (name.length == 0){
        var namecheck = false;
        alert("Please type your name")
    }
    else{
        var namecheck = true;
    }
    if(phone.length != 10){
        var phonecheck = false;
        alert("INVALID PHONE NUMBER")
    }
    else {
        var phonecheck = true;
    }
    if(mail.includes("@")){
        var mailcheck = true;
        console.log("MAIL VERIFIED")
    }
    else{
        var mailcheck = false;
        alert("INVALID MAIL")
    }
    if (msg.length != 0){
        var msgcheck = true;
    }
    else{
        var msgcheck = false;
        alert("Please Put a Message")
    }
    if ((namecheck == true) && (phonecheck == true) && (mailcheck == true) && (msgcheck == true)){
        return 1;
    }
    else{
        return 0;
    }

}