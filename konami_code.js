const codes = [
  "ArrowUp", //keycode = 38
  "ArrowUp", 
  "ArrowDown", //keycode = 40
  "ArrowDown",
  "ArrowLeft",  //keycode = 37
  "ArrowRight", //keycode = 39
  "ArrowLeft",
  "ArrowRight",
  "b",  //keycode = 66
  "a"   //keycode = 65
];

var allowedKeys = {
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  65: 'a',
  66: 'b'
};

/*document.addEventListener('keydown', init);

var index=0;

function init(KeyboardEvent) {
  //var key = allowedKeys[e.key];
  const theKey = KeyboardEvent.key
  //requiredKey = codes[index];
  
  if (theKey == codes[index]) {
    index++;
    if(index == codes.length) {
      alert("Konami Code Entered!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
*/

function init() {
document.addEventListener('keydown', function(e) {
  const theKey = e.key
  if(theKey == codes[index]) {
    index++;
    if(index == codes.length) {
      alert("Konami Code Entered!");
      index = 0;
    }
  } else {
    index = 0;
  }
})
}
