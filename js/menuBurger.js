document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger')
  const menu = document.getElementById('menu')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')

    //при открытом меню не скролится контент страницы
    document.body.classList.toggle('lock')
  })

  //при клике на элемент меню, меню задвигается
  const li = document.querySelectorAll('.menu a')
  for (let elem of li) {
    elem.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      document.body.classList.toggle('lock')

      //пример скрола в htaderscroll.js
      const currentElement = document.querySelector(elem.getAttribute('href'))

      function getCoords(elem) {
        let box = elem.getBoundingClientRect()
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset,
        }
      }

      const TopCoord = getCoords(currentElement)['top']

      $('body,html').animate({ scrollTop: TopCoord - 49 }, 100)
    })
  }
})
