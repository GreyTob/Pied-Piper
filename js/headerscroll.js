//шапка не накрывает контент при переходе по якорным ссылкам
$('.nav').on('click', function () {
  if (this.hash) $(document).data('h', 1)
})
$(document).scroll(function () {
  if ($(this).data('h'))
    $(this)
      .data('h', 0)
      .scrollTop($(this).scrollTop() - 84)
})
