(function($){
  $(function(){
    "use strict";

    var mainNav = $('.nav-main');
    var subNav = $('.sub-nav');

    subNav.hide();

    mainNav.on('click', function(){
      if ($(this).next().is(':visible')){
        $(this).next().hide();
      } else {
        $(this).siblings('div').hide();
        $(this).next().show();
      }
    });

  });
}(jQuery));
