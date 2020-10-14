const passwrd = "An12";

function checkPasswordSthrength(pwd) {
  let numberOfRequiredChar = 0;
  //Check for numbers
  const rgForNumber = new RegExp(/^(?=.{6,20}$)\D*\d/);
  if (!rgForNumber.test(pwd)) {
    numberOfRequiredChar++;
  }

  //check for uppercase
  const rgForUpperCase = new RegExp(/^([A-Z]+)$/);
  if (!rgForUpperCase.test(pwd)) {
    numberOfRequiredChar++;
  }

  //check for lowercase
  const rgForLowerCase = new RegExp(/^([a-z]+)$/);
  if (!rgForLowerCase.test(pwd)) {
    numberOfRequiredChar++;
  }

  const rgForSpecialChar = new RegExp(
    /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
  );
  if (!rgForSpecialChar.test(pwd)) {
    numberOfRequiredChar++;
  }

  if (6 - pwd.length > numberOfRequiredChar) {
    return 6 - pwd.length;
  } else {
    return numberOfRequiredChar;
  }
}
