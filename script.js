/* AVATAR USUÁRIO */
(function($) {
 
    $(function() {
 
      var $this = $(this);
      var username = $this.find('#header-user span').text();
      var $img1 = $this.find('#header-user img');
      var $img2 = $this.find('#main-user-menu .avatar-big img');

      $img1.attr('src', 'https://imager.radiohabblet.com.br/?user=' + username + '&action=std,crr=&gesture=sml&direction=4&head_direction=3&headonly=true&size=l&img_format=&dance=&effect=&frame_num=30');
      $img2.attr('src', 'https://imager.radiohabblet.com.br/?user=' + username + '&direction=4&head_direction=3&size=l&gesture=sml&action=std');
    });
}(jQuery));
