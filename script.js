const dropdown = () => {
    let navMobile = document.getElementById('nav_mobile');
    let backgroundSection = document.getElementById('background_section');
    let backgroundHeader = document.getElementById('background_header');
    if (navMobile.style.opacity === "1") {
        navMobile.style.opacity= "0";
        backgroundSection.style.opacity = "1";
        backgroundHeader.style.opacity = "1";
    }
    else {
        navMobile.style.opacity = "1";
        backgroundSection.style.opacity = ".7";
        backgroundHeader.style.opacity = ".7";
    }
}

