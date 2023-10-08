//Button Display

const showButton = document.getElementById('showButton');
const hiddenText = document.getElementById('hiddenText');

showButton.addEventListener('click', function () {
  hiddenText.style.display = 'block'; 
  showButton.style.display = 'none'; 
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
  console.log('loaded CB');
}
console.log('CB ready');

//SweetAlert

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';

script.onload = function() {
  Swal.fire({
    title: 'Congratulations!!!',
    text: 'You just won a iPhone 15 for FREE!!!',
    icon: 'success',
    confirmButtonText: 'Comfirm'
  });

  console.log('loaded SA2');
};

console.log('SA2 ready');

document.head.appendChild(script);

//Tailwind

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://cdn.tailwindcss.com";

script.onload = function() {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
  }

  console.log('loaded TW');
};

console.log('TW ready');

document.head.appendChild(script);

$(document).ready(function(){ 
  $("button").click(function(){ 
      $("#divContent").load("https://api.github.com/repositories/2126244/commits?per_page=1"); 
  }); 
}); 