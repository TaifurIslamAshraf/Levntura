const header = document.querySelector("header")
console.log(header);


window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 130);
    console.log(this.window.scrollY);
    
});
