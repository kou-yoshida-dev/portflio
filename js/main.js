
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



      var beforeBg = '';
      $(window).on('load scroll touchmove', function() {
          $scrollTop = $(window).scrollTop();
          // 画像を切り替える位置
          $changePoint = $('.about').offset().top ;
          if($scrollTop < $changePoint){
            // 同じ背景画像への切替を行わないように判定
            if(beforeBg !== 'bgA'){
              // 新しい画像へ切替
              $('.top-wrapper').removeClass('bgB');
              $('.top-wrapper').addClass('bgA');
              beforeBg = 'bgA';
            }
          } else {
            if(beforeBg !== 'bgB'){
              $('.top-wrapper').removeClass('bgA');
              $('.top-wrapper').addClass('bgB');
              beforeBg = 'bgB';
            }
          }
      });



})