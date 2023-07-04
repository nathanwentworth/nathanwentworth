(function () {
  let themePicker = null;

  let currentTag = '';
  let currentTheme = '';

  window.addEventListener('load', () => {
    themePicker = document.getElementById('theme-picker');
    currentTheme = window.localStorage.getItem('theme') || themePicker.value;
    themePicker.value = currentTheme;

    themePicker.addEventListener('change', (event) => {
      if (currentTheme) {
        document.body.classList.remove(currentTheme);
      }
      currentTheme = event.target.value;
      if (currentTheme) {
        document.body.classList.add(currentTheme);
        window.localStorage.setItem('theme', currentTheme);
      }
    });


  });

}());