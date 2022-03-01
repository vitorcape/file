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

/* AVATAR USER */
var strg = $("#user-name").text();
var word_one = strg.split(' ')[0];

$('div#user-avatar').append('<img src="https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user='+word_one+'&direction=2&head_direction=2&size=l&action=std">');
