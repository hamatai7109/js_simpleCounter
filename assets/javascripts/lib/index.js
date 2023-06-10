let count = 0;

function countUp(){
  count++;
  document.getElementById('jsi-result').innerHTML = count;
}

function countDown(){
  count--;
  document.getElementById('jsi-result').innerHTML = count;
}

function reset(){
  count = 0;
  document.getElementById('jsi-result').innerHTML = count;
}
