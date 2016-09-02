$(function () {

  // carousel
  $('.jcarousel').jcarousel();

  $('.jcarousel-prev').click(function () {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function () {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });

  $('.jcarousel-pagination').jcarouselPagination({
    item: function (page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  });

  // custom select
  $(".chosen-select").chosen({
    allow_single_deselect: true
  });

  $(".chosen-select-width").chosen({width: "20%"});

  // custom checkbox
  // проверяем, какие чекбоксы активны и меняем класс для родительского дива
  $('.decor_checkbox').each(function(){
    var checkbox = $(this).find('input[type=checkbox]');
    if(checkbox.prop("checked")){
      if(checkbox.prop("disabled"))  $(this).addClass("check_active-dis");
      $(this).addClass("check_active");
    }else if (checkbox.prop("disabled"))  $(this).addClass("no-check-dis");
  });

  // при клике по диву, делаем проверку
  $('.decor_checkbox span').click(function(){
    var checkbox = $(this).find('input[type=checkbox]');
    console.log(this);
    // если чекбокс был активен
    if((checkbox.prop("checked"))&&(!checkbox.prop("disabled"))){
      // снимаем класс с родительского дива
      $(this).parent().removeClass("check_active");
      // и снимаем галочку с чекбокса
      checkbox.prop("checked", false);
      // если чекбокс не был активен
    }else{
      // добавляем класс родительскому диву
      $(this).parent().addClass("check_active");
      // ставим галочку в чекбоксе
      checkbox.prop("checked", true);
    }
  });
});

