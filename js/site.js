// get the string from the page
// Controller funcyion
function getValue() {
  // hide the alert box at the beginning of the program
  document.getElementById("alert").classList.add("invisible");

  let userString = document.getElementById("userString").value;

  let revString = reverseString(userString);

  displayString(revString);
}

// reverse the string
// Logic function
function reverseString(userString) {
  let revString = [];

  // reverse the string using a for loop, backwards
  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }

  return revString;
}

// display the reversed string to the user
// View function
function displayString(revString) {
  // write to the page
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <strong>${revString}</strong>`;

  // show the alert box
  document.getElementById("alert").classList.remove("invisible");
}
