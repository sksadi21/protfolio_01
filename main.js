//mobile menu


$('.menu-icon').on('click', function(){

   $('.main-menu').slideToggle();

})


$(window).resize(function(){

   var screenSize = $(window).width();

   if (screenSize > 991) {
      $('.main-menu').removeAttr('style');
   }

});

