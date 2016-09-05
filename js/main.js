$(function () {

  // carousel
  $('.jcarousel').jcarousel({
    wrap: 'both',
    center: true
  }).jcarouselAutoscroll({
    interval: 3000,
    target: '+=1',
    autostart: true
  });

  $('.jcarousel-prev').click(function () {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function () {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });

  $('.jcarousel-pagination').jcarouselPagination({
    'perPage': 1,
    item: function (page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  }).on('jcarouselpagination:active', 'a', function () {
    $(this).addClass('active');
  }).on('jcarouselpagination:inactive', 'a', function () {
    $(this).removeClass('active');
  });
  
  // custom select
  $(".chosen-select").chosen({
    allow_single_deselect: true
  });

  $(".chosen-select-width").chosen({width: "30%"});

  // custom checkbox
  // проверяем, какие чекбоксы активны и меняем класс для родительского дива
  $('.decor_checkbox').each(function () {
    var checkbox = $(this).find('input[type=checkbox]');
    if (checkbox.prop("checked")) {
      if (checkbox.prop("disabled"))  $(this).addClass("check_active-dis");
      $(this).addClass("check_active");
    } else if (checkbox.prop("disabled"))  $(this).addClass("no-check-dis");
  });

  // при клике по лейбе, делаем проверку
  $('.decor_checkbox label').click(function (e) {
    var checkbox = $(this).parent().find('input[type=checkbox]');
    if (!checkbox.prop("disabled")) {
      // если чекбокс был активен
      if (checkbox.prop("checked")) {
        // снимаем класс с родительского дива
        $(this).parent().removeClass("check_active");
        // и снимаем галочку с чекбокса
        checkbox.prop("checked", false);
        // если чекбокс не был активен
      } else {
        // добавляем класс родительскому диву
        $(this).parent().addClass("check_active");
        // ставим галочку в чекбоксе
        checkbox.prop("checked", true);
      }
    }
  });

  // drop-down menu
  $('.menu-horizontal').find('ul').css({'display': 'none'});

  $('.menu-horizontal > li').hover(
      function () {
        $(this).addClass("active");
        $(this).find('ul').stop(true, true); // останавливаем всю текущую анимацию
        $(this).find('ul:first').slideDown();
      },
      function () {
        $(this).removeClass("active");
        $(this).find('ul:first').slideUp('fast');
      }
  );

  var subMenu = $('.menu-horizontal ul li');
  subMenu.find('ul').css({'display': 'none'});
  subMenu.hover(
      function () {
        $(this).find('ul:first').stop(true, true);
        $(this).find('ul:first').fadeIn();
      },
      function () {
        $(this).find('ul:first').fadeOut('fast');
      });

  $('.menu-horizontal ul').mouseenter(function () {
    $(this).animate({
      backgroundColor: '#2db0ff'
    }, 1000)
  });
  $('.menu-horizontal ul').mouseleave(function () {

    $(this).animate({
      backgroundColor: '#E14B4B'
    }, 500);
  });

  subMenu.has('ul').find('a:first').addClass('sub-menu');
  $('.menu-horizontal > li:has(ul)').find('a:first').addClass('drop-menu');
});




