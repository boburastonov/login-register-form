const navbarMenu = document.querySelector(".navbar .links");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".form-popup .close-btn");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn =document.querySelector(".close-menu");
const formPopup = document.querySelector(".form-popup");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a ");

loginBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
  console.log('hello');
});

closeBtn.addEventListener("click", () => loginBtn.click());

menuBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('show-menu')
})

hideMenuBtn.addEventListener('click', ()=> menuBtn.click())

loginSignupLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});
