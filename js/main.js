//スクロールに応じてヘッダーにactiveクラスを付与
//(window).scroll　html領域のスクロール動作
//(this).scrollTop　HTMLのTOPからの画面位置
$(window).scroll(function(){
    if($(this).scrollTop() > 300 ){
        $('.header-inner').addClass('__header-active');
    }
    else{
        $('.header-inner').removeClass('__header-active');
    }
});

/******************************
 背景色が伸びてテキストを表示
*******************************/
  // 動きのきっかけの起点となるアニメーションの名前を定義
  function BgFadeAnime(){
// 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    }else{
      $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    }
  });

  // 文字列を囲う子要素
  $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }else{
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });
}

  // 画面が読み込まれたらすぐに動かしたい場合
  $(window).on('load', function(){
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });
  // ここまで

//スクロールエフェクト
//fadeUpEffect関数を定義しておく
function fadeUpEffect() {
    $('.fadeUpEffect').each(function () {
        var elemPos = $(this).offset().top + 100;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        }
    });
}
$(window).scroll(function () {
    fadeUpEffect();
});


//トレーナーのタブ
$tabs = $('.tab');
$('.tab').on('click', function () {
    $('.__tab-active').removeClass('__tab-active');
    $(this).addClass('__tab-active');
    const index = $tabs.index(this);
    $('.tab-content').removeClass('__show').eq(index).addClass('__show');
})


//FAQのアコーディオン
$('.accordion-question').on('click', function () {
    $(this).toggleClass('__acordion-active');
    $(this).next().slideToggle(200);
});


/*TOPへスクロールするボタンの処理 */
$(function () {
    const $pageTop = $("#js-pagetop");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $pageTop.fadeIn(300).css('display', 'flex');
        } else {
            $pageTop.fadeOut(300);
        }
    });

    $pageTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});
