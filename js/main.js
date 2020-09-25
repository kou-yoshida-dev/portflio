
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
   




})