//плавная пеермотка по якорной ссылке
//шапка не накрывает контент при переходе по якорным ссылкам
$(document).ready(function () {
  $('#menu').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top - 84 }, 500)
  })
})
