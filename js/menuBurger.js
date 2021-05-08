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
    })

    // elem.classList.toggle('active')
    // console.log(li)
  }
})
