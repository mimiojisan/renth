
// 各コンテンツをふわっと表示させるJS 
window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
    scroll_effect();
  });

  function scroll_effect(){
    $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('effect-scroll');
      }
    });
  }
};

$(function(){
  //質問の答えはあらかじめ非表示に
  $(".answer").css("display","none");
    
  //質問をクリックした時
  $(".question").click(function(){
    //クリックした質問以外の全てのopenを取る
    $(".question").not(this).removeClass("open");
    
    //クリックされた質問以外の答えを閉じる
    $(".question").not(this).next().slideUp(300);
    
    //クリックしたもの(this)にopenクラスを付与
    $(this).toggleClass("open");
    
    //クリックしたもの(this)の答えを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
});