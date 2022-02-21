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

const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
if(linkColor){
linkColor.forEach(l=> l.classList.remove('active'))
this.classList.add('active')
}
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))
