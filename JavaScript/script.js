//Button Display

const showButton = document.getElementById('showButton');
const hiddenText = document.getElementById('hiddenText');

showButton.addEventListener('click', function () {
  hiddenText.style.display = 'block'; 
  showButton.style.display = 'none'; 
  imgStatus.style.display = 'none';
});


//Flashing Button

let head = document.getElementById("hiddenText");
let myArray = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Purple"];
let intervalId;
let isDisplay = false;

function changeColor() {
  if (!isDisplay) {
    isDisplay = true;

    let i = 0;

    intervalId = setInterval(function () {
      head.style.color = myArray[i];
      i = (i + 1) % myArray.length;
    }, 200);
  } else {
    isDisplay = false;
    clearInterval(intervalId);
  }
}

function displayTextAndChangeColor() {
  changeColor();
}

displayTextAndChangeColor();


let btns = document.getElementById("showButton");
btns.addEventListener("click", changeColor);


//Cookie banner

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
}
console.log('ready');

//SweetAlert

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';

script.onload = function() {
  // SweetAlert2 library is loaded, you can use it here
  Swal.fire({
    title: 'Congratulations!!!',
    text: 'You just won a IPhone 15 for FREE!!!',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

document.head.appendChild(script);
