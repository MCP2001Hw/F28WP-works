$(document).ready(function(){
  // when ready, grab the html 
  getContents();
});

function getContents(){
  $.ajax({
      url: 'https://f28wp.github.io/',
      success: function(data) {
         console.log(data);
          $('#data').html( data );
      }
  });
}