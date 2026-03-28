export function initNav() {
  const nav = document.getElementById('nav')
  const menuBtn = document.getElementById('menuBtn')
  const navLinks = document.getElementById('navLinks')
  const snapContainer = document.getElementById('snapContainer')

  if (!nav || !menuBtn || !navLinks || !snapContainer) return

  snapContainer.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', snapContainer.scrollTop > 50)
  })

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navLinks.classList.toggle('open')
  })

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navLinks.classList.remove('open')
    })
  })
}
