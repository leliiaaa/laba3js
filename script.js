(function () {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  
  if (firstLetter === "j") {
     byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

  console.log("Names ending with letter L ");
    for (var i = 0; i < names.length; i++) {

        var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();

        if (lastLetter === "l") {
            console.log(names[i]);
        }
    }
})();
