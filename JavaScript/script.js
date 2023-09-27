let head = document.getElementById("head");
let myArray = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Purple"];
let intervalId; 
let isChanging = false; 

function changeColor() {
  if (!isChanging) {
    isChanging = true;

    let i = 0;

    intervalId = setInterval(function () {
      head.style.color = myArray[i];
      i = (i + 1) % myArray.length;
    }
    ,200);
  } else {
    isChanging = false;
    clearInterval(intervalId);
    head.style.color = "black"
  }
}


let btns = document.getElementById("buttons");
btns.addEventListener("click", changeColor);

document.body.style.height = '200pt';

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';
script['data-height']   = '20px';
script['data-position'] = 'top';
script['data-message']  = 'We use cookies!';
document.head.appendChild(script); 

script.onload = function()
{
  console.log('loaded script');

  // console.log( initCookieConsent );
}
console.log('ready');