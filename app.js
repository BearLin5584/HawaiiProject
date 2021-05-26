let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");


window.addEventListener("scroll", () => {
    if(window.pageYOffset != 0){
        header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        header.style.color = "#f6d6e0";        
        headerAnchor.forEach( a => {
            a.style.color = "#9ae8d6";
        })
    } else {
        header.style ="";
    }
})