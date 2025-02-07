function clickMenu() {
    var menuItems = document.getElementsByClassName("Navbar__link");
    
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].style.display === "block") {
            menuItems[i].style.display = "none";
        }
        else {
            menuItems[i].style.display = "block";
        }
    }
}


