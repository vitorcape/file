/* USUÁRIO */
$(document).ready(function(){
 $('#nav-user').append('<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user='+_userdata["username"]+'&direction=4&head_direction=3&size=m&headonly=1">');
});

/* NOTIFICAÇÃO NAVBAR */
var strg = $(".toread-message").text();
var word_one = strg.split(' ')[0];
var nova_mp = document.querySelector('a.mainmenu[href*="/privmsg?folder="] > #i_icon_mini_new_message');

if (nova_mp) {
  $('#nav_mp a').append('<span class="ms-2 fs-6 badge bg-danger">'+ word_one +'</span>');
}

/* AVATAR USUÁRIO */
(function($) {
 
    $(function() {
 
        if (/^\/t(\d+)(p\d+-|-).*$/i.test(location.pathname)) {
 
            $('.card').each(function() {
                var $this = $(this);
 
                var username = $this.find('#user-name').text();
                var $img = $this.find('#user-avatar img');
 
                $img.attr('src', 'http://www.habbo.com.br/habbo-imaging/avatarimage?user=' + username + '&direction=2&head_direction=2&size=l&action=std');
            });
        }
 
 
    });
}(jQuery));

/* TOOLTIP BOOTSTRAP */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
