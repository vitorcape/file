$(".header_toggle").click(function () {
    if($("body").hasClass("body-pd")){
        $("#body-pd").removeClass("body-pd");
        $("header").removeClass("body-pd");
        $("#nav-bar").removeClass("show");
        $("#header-toggle").removeClass("bx-x");
    }
    else{
        $("body").addClass("body-pd");
        $("header").addClass("body-pd");
        $("#nav-bar").addClass("show");
        $("#header-toggle").addClass("bx-x");
    };
 });
