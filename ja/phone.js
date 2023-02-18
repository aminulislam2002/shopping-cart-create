/* document.getElementById("btn-phone-plus").addEventListener("click", function () {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const pereviousPhoneNumber = parseInt(phoneNumberString);
  const newPhoneNumber = pereviousPhoneNumber + 1;
  phoneNumberField.value = newPhoneNumber;
});
document.getElementById("btn-phone-minus").addEventListener("click", function () {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const pereviousPhoneNumber = parseInt(phoneNumberString);
  const newPhoneNumber = pereviousPhoneNumber - 1;
  phoneNumberField.value = newPhoneNumber;
}); */

function phoneNumberUpdate(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const pereviousPhoneNumber = parseInt(phoneNumberString);
  let newPhoneNumber;

  if (isIncrease === true) {
    newPhoneNumber = pereviousPhoneNumber + 1;
  } else {
    newPhoneNumber = pereviousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhoneTotal(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoenTotalElement = document.getElementById("phone-total");
  phoenTotalElement.innerText = phoneTotalPrice;
}

document.getElementById("btn-phone-plus").addEventListener("click", function () {
  const newPhoneNumber = phoneNumberUpdate(true);
  updatePhoneTotal(newPhoneNumber);
  calculateSubTotal();
});
document.getElementById("btn-phone-minus").addEventListener("click", function () {
  const newPhoneNumber = phoneNumberUpdate(false);
  updatePhoneTotal(newPhoneNumber);
  calculateSubTotal();
});
