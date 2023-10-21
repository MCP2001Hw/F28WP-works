var $textarea = $('<textarea>').attr('id', 'ta0').appendTo('body');
var $loadbutton = $('<button>Load</button>').appendTo('body');
var $savebutton = $('<button>Save</button>').appendTo('body');

$textarea.val('Enter text');

$savebutton.click(function() {
  var textContent = $textarea.val();
  var blob = new Blob([textContent], { type: 'octet/stream' });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'afile.txt';
  a.click();
  window.URL.revokeObjectURL(url);
});

$loadbutton.click(function() {
  var input = $('<input type="file">');
  input.on('change', function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
          var fileContents = event.target.result;
          $textarea.val(fileContents);
      };
      reader.readAsText(file);
  });
  input.click();
})