$(document).ready(function() {
    const menu = $(".menu, .menu-mobile");
    let expanded = false;
    $(".open-close-menu").click(function() {
        if (expanded) {
            menu.addClass("expanded");
        }
        else {
            menu.removeClass("expanded");
        }
        expanded = !expanded;
    });
    $(".open-menu").click(function() {
        menu.addClass("expanded");
        expanded = true;
    });
    $(".close-menu").click(function() {
        menu.removeClass("expanded");
        expanded = false;
    });
});