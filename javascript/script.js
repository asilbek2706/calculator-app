document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelectorAll('.button');

  function appendNumber(number) {
    console.log(number);
  }

  button.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const number = btn.textContent;
      appendNumber(number);
    });
  });
});
