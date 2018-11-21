function darkModeCheck() {
  let time = new Date();
  let hour = time.getHours();
  if (hour < 6 || hour > 18) {
    document.querySelector('html').classList.add('dark');
  } else {
    document.querySelector('html').classList.remove('dark');
  }
}
darkModeCheck();
// window.addEventListener('load', darkModeCheck, false);
