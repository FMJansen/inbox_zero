var intervalCont;

document.addEventListener('keyup', checkZero);
window.onload = function() {
  intervalCont = setInterval(checkZero, 500);
}

function checkZero() {
  let tc = document.querySelectorAll('.TC');
  if(tc[0].innerText === "No new mail!") {
    document.querySelector('.aia').classList.add('zero');
  } else {
    document.querySelector('.aia').classList.remove('zero');
  }
}
