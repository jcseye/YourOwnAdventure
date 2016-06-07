var hasConfirmed = confirm("Are you ready to play?");

if (hasConfirmed) {
  var myName = prompt("what is your mame?");
  document.write(myName);
if (myName.length <= 2) {
  myName = "Anon";
}

document.write("<p>Hello" + myName);
document.write("<br>Your game is about to begin.<br> \
you have just arrived at a 4 way stop.</p>");

var myAnswer1 = prompt("Are you the only one waiting?(yes/no)");

if (myAnswer1 === "yes" ) {
  document.write("<p>Proceed safely through th intersection");

}else {

  var myAnswer2 = prompt("Are you thre first one here?");

  if (myAnswer2 === "yes") {
    document.write("<p>Proceed safely through the intersection");

  }else {

  }
}
}
