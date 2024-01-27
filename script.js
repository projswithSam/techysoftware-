// menu icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let  navbar= document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active 

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })


        };
    })
    // sticky navbar

    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);
};
// remove menu icon navbar when click navbar link (scroll) 
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');

// dark light mode 
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

};

// scroll reveal 
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });

// contact form 

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br>  Email:${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}` ;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "samyakkulsh.0104@gmail.com",
        Password : "BE5D13E1046D6E27CE319B3064C237C5B2DB",
        To : 'samyakkulsh.0104@gmail.com',
        From : "samyakkulsh.0104@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
      }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}