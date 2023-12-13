/* AVATAR USUÁRIO */
(function($) {
 
    $(function() {
 
      var $this = $(this);
      var username = $this.find('#header-user span').text();
      var $img1 = $this.find('#header-user img');
      var $img2 = $this.find('.avatar-big img');

      $img1.attr('src', 'https://imager.radiohabblet.com.br/?user=' + username + '&direction=4&head_direction=3&size=m&gesture=sml&headonly=1');
      $img2.attr('src', 'https://imager.radiohabblet.com.br/?user=' + username + '&direction=4&head_direction=3&size=l&gesture=sml&action=std');
    });
}(jQuery));
