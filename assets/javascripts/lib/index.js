let count = 0;

function countUp(){
  count++;
  document.getElementById('jsi-result').innerHTML = count;
  document.getElementById('jsi-match').innerHTML += "<li class='match'><img class='matchImg' src='assets/images/common/match.png' alt='マッチ'></li>"
}

function countDown(){
  count--;
  document.getElementById('jsi-result').innerHTML = count;
  document.getElementById('jsi-match').lastElementChild.remove();
}

function reset(){
  count = 0;
  document.getElementById('jsi-result').innerHTML = count;
  document.getElementById('jsi-match').innerHTML = ``;
}
