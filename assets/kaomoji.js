var kaomoji;
var kao = ["ヾ(＠⌒ー⌒＠)ノ", "☆⌒(ゝ。∂)", "(￣﻿ _ゝ￣)", "(っ˘з(˘⌣˘ ) ♡", "(〃￣ω￣〃) ゞ", "(◕‿◕✿)", "\\（￣へ￣）/", "(´；ω；｀)"];

window.addEventListener('load', function() {
  kaomoji = document.getElementById('kaomoji');
  kaomoji.addEventListener('click', function() {
    cycleKaomoji();
  });

  cycleKaomoji();
});

function cycleKaomoji() {
  kaomoji.innerText = kao[randInt(0, kao.length - 1)];
}

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
