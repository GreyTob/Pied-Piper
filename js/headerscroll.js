//свое решение
function navHandler() {
  //выбираю нужный элементы
  for (let elem of document.querySelectorAll('.menu a')) {
    //вешаю на выбранные элементы события
    elem.addEventListener('click', function (event) {
      event.preventDefault()

      //вычсиляю текущую ширину экрана по элементу растянутому во всю штрину
      const deviceWidth = document.getElementById('header')
      let currentWidth = deviceWidth.clientWidth

      if (currentWidth > 767) {
        //получаю значение атрибута href (this = elem)
        let id = this.getAttribute('href')

        //нахожу элемент с нужным href
        const currentElement = document.querySelector(id)

        //получаю координаты нужного элемента
        function getCoords(elem) {
          let box = elem.getBoundingClientRect()
          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
          }
        }

        //получаю координату Top
        const TopCoord = getCoords(currentElement)['top']

        //подумать как закончить скрипт без jQuery

        //перемещаюсь к нужной координате за вычетом величины header - 84px (header {display: fixed})
        $('body,html').animate({ scrollTop: TopCoord - 83 }, 500)
      }
    })
  }
  //для logo
  const logo = document.querySelector('.logo a')
  logo.addEventListener('click', function (event) {
    event.preventDefault()

    let id = logo.getAttribute('href')

    const currentElement = document.querySelector(id)

    function getCoords(elem) {
      let box = elem.getBoundingClientRect()
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      }
    }

    const TopCoord = getCoords(currentElement)['top']

    $('body,html').animate({ scrollTop: TopCoord - 83 }, 500)
  })
}

//решения от сюда https://realadmin.ru/coding/js-scroll.html
//положение block: "start", "center", "end" или "nearest" -  слабо регулируется, а с фиксированым header вообще лажа
// function navHandler() {
//   const anchors = document.querySelectorAll('.header a')

//   for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault()

//       const blockID = anchor.getAttribute('href')

//       document.querySelector(blockID).scrollIntoView({
//         behavior: 'smooth',
//         block: 'center',
//       })
//     })
//   }
// }

//на jQuery
//шапка не накрывает контент при переходе по якорным ссылкам
// $(document).ready(function () {
//   $('#menu').on('click', 'a', function (event) {
//     event.preventDefault()
//     let id = $(this).attr('href'),
//       top = $(id).offset().top
//     $('body,html').animate({ scrollTop: top - 84 }, 500)
//   })
// })

//еще вариан на jQuery; 'a[href^="#"' для всех ссылок с #
// function navHandler() {
//   $('a[href^="#"').on('click', function () {
//     let href = $(this).attr('href')

//     $('html, body').animate({
//       scrollTop: $(href).offset().top - 84,
//     })
//     return false
//   })
// }

document.addEventListener('DOMContentLoaded', navHandler)
