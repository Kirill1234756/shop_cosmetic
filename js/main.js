document.querySelectorAll(".img-gallery").forEach((img) => {
    img.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        img.classList.add("active");
    })
})