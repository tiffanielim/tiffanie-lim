function toggleMenu()
{
    console.log("Toggle menu pressed");
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".hamburgerIcon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}