
function toggleMobileNavbar() {
    let MobiNavEle = document.getElementById('navbar');
    MobiNavEle.classList.toggle("max-h-0");
    MobiNavEle.classList.toggle("max-h-96");
}


function highlightCurrentNavItem() {
    const navItems = document.querySelectorAll('#navbar a');
    let styleClasses = "text-white text-primary-900 bg-white".split(" ");
    navItems.forEach((item) => {
        let link = new URL(item.href).pathname;
        if (link === window.location.pathname) {
            styleClasses.forEach((styleClass) => item.classList.toggle(styleClass));
        }
    });
}

document.addEventListener('DOMContentLoaded', highlightCurrentNavItem);