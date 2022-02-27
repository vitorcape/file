/* USUÁRIO */
$(document).ready(function(){
 $('#nav-user').append('<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user='+_userdata["username"]+'&direction=4&head_direction=3&size=m&headonly=1">');
});

/* NOTIFICAÇÃO NAVBAR */
var nova_mp = document.querySelector('a.mainmenu[href*="/privmsg?folder="] > #i_icon_mini_new_message');

if (nova_mp) {
  $('#nav_mp a').append('<span class="badge bg-danger">4</span>');
}
