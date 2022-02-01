/**
 * Fullscrenn Navigation Toggle
 */
 (() => {
  const openNavigation = document.querySelector('.js-open-nav')
  const closeNavigation = document.querySelector('.js-close-nav')
  const fullscreenNavigation = document.querySelector('.js-fullscreen-navigation')
  
  const open = () => {
    fullscreenNavigation.classList.toggle("is-open");
  }

  const close = () => {
    fullscreenNavigation.classList.remove("is-open");
  }

  openNavigation.addEventListener("click", open);
  
  if (closeNavigation) {
    closeNavigation.addEventListener("click", close);
  }
})();




