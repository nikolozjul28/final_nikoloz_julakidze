let burger = document.querySelector(".burger");
let mark = document.querySelector(".fa-xmark");
let mobileMenu = document.querySelector(".header_nav");


burger.addEventListener("click", ()=>{
    burger.style.display = "none";
    mark.style.display = "block";
    mobileMenu.classList.add("show");
})

mark.addEventListener("click", () => {
  burger.style.display = "block";
  mark.style.display = "none";
  mobileMenu.classList.remove("show");
});

