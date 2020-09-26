
$(function(){
  

    // スクロールボタン
    $('.scroll-btn').click(function(){

        var id=$(this).attr('href');
        var position=$(id).offset().top;
 
        $('html,body').animate({
            'scrollTop':position
        },1300);
     });




    $('.header-btn').click(function(){
       $('.header').toggleClass('header-toggle');
       
     });

    
    $('.header-btn').click(function(){
       $('.bar1').toggleClass('batu1');
       $('.bar2').toggleClass('batu2');
       $('.bar3').toggleClass('batu3');
       
     });







     $(window).scroll(function(){
      var position = $('.about').offset().top;
      if(position +300 < $(window).scrollTop() + $(window).height()){
          // $('.about-content-b').fadeIn(3000);
          $('.titleicon').addClass('iconanimation');
      }
  })

  $(window).scroll(function(){
    var position = $('.skills').offset().top;
    if(position +300 < $(window).scrollTop() + $(window).height()){
        // $('.about-content-b').fadeIn(3000);
        $('.titleicon2').addClass('iconanimation2');
    }
})
  $(window).scroll(function(){
    var position = $('.works').offset().top;
    if(position +300 < $(window).scrollTop() + $(window).height()){
        // $('.about-content-b').fadeIn(3000);
        $('.titleicon3').addClass('iconanimation3');
    }
})
   




})