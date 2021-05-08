document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger')
  const menu = document.getElementById('menu')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')

    //при открытом меню не скролится контент страницы
    document.body.classList.toggle('lock')
  })
})
