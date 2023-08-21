
$(function(){//headerのアニメーション
  $('.p-header__menu').click(function() {
    $(this).toggleClass('open');
    $('.p-header__menu--list').toggleClass('open');
  });
});

$(function() {// TOPのフェードインのアニメーション
  $(window).scroll(function(){
    var windowH = $(this).height();
    scrollY =$(window).scrollTop();

    $('.fade-in-top1').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        setTimeout(function(){
          $(this).addClass('fade-in-1s');
        }.bind(this), 500); // 0.5秒待機してから適用
      } else {
        $(this).removeClass('fade-in-1s');
      }
    });

    $('.fade-in-top2').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        setTimeout(function(){
          $(this).addClass('fade-in-2s');
        }.bind(this), 1000); // 1秒待機してから適用
      } else {
        $(this).removeClass('fade-in-2s');
      }
    });
  });
});


$(function() {// our messageのフェードインのアニメーション
  $(window).scroll(function(){
    var windowH = $(this).height();
    scrollY =$(window).scrollTop();

    $('.fade-in').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-in-active');
      } else {
        $(this).removeClass('fade-in-active');
      }
    });
  });
});


$(function() {// serviceのフェードインのアニメーション
  $(window).scroll(function(){
    var windowH = $(this).height();
    scrollY =$(window).scrollTop();

    $('.fade-in-right').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-in-right-active');
      } else {
        $(this).removeClass('fade-in-right-active');
      }
    });

    $('.fade-in-left').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-in-left-active');
      } else {
        $(this).removeClass('fade-in-left-active');
      }
    });

    $('.fade-in-design').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-in-design-active');
      } else {
        $(this).removeClass('fade-in-design-active');
      }
    });
    $('.p-service__article--head--gray--box-left1').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-gray-left1');
      } else {
        $(this).removeClass('fade-gray-left1');
      }
    });
    $('.service__slide-in-left1').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('service__slide--in--animation-left1');
      } else {
        $(this).removeClass('service__slide--in--animation-left1');
      }
    });
    $('.p-service__article--inner--gray--box-right1').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-gray-right1');
      } else {
        $(this).removeClass('fade-gray-right1');
      }
    });
    $('.service__slide-in-right1').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
         $(this).addClass('service__slide--in--animation-right1');
      } else {
        $(this).removeClass('service__slide--in--animation-right1');
      }
    });
    $('.p-service__article--bottom--gray--box-left2').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
         $(this).addClass('fade-gray-left2');
      } else {
        $(this).removeClass('fade-gray-left2');
      }
    });
    $('.service__slide-in-left2').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('service__slide--in--animation-left2');
      } else {
        $(this).removeClass('service__slide--in--animation-left2');
      }
    });
  });
});


$(function() {// memberのフェードインのアニメーション
  $(window).scroll(function(){
    var windowH = $(this).height();
    scrollY =$(window).scrollTop();

    $('.fade-in-member').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-in-members-active');
      } else {
        $(this).removeClass('fade-in-members-active');
      }
    });
  });
});

$(function() {// benefitのフェードインのアニメーション
  $(window).scroll(function(){
    var windowH = $(this).height();
    scrollY =$(window).scrollTop();

    $('.fade-in-benefit').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-in-benefit-active');
      } else {
        $(this).removeClass('fade-in-benefit-active');
      }
    });
  });
});

$(function() {// newsのフェードインのアニメーション
  $(window).scroll(function(){
    var windowH = $(this).height();
    scrollY =$(window).scrollTop();

    $('.fade-in-news').each(function(){
      var elemPosition = $(this).offset().top;
      var thisHeight = $(this).height();
      if(elemPosition <= scrollY + windowH && elemPosition + thisHeight >=scrollY){
        $(this).addClass('fade-in-news-active');
      } else {
        $(this).removeClass('fade-in-news-active');
      }
    });
  });
});



$(function() { //リンクをクリックしたらスクロール
  $('.js-scroll-link').click(function(event) {
    event.preventDefault();
    var target = $($(this).attr('href'));
    var offsetTop = target.offset().top;
    $('html, body').animate({
      scrollTop: offsetTop
    }, 500);
  });
});