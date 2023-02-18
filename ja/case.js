/* document.getElementById("btn-case-plus").addEventListener("click", function () {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const pereviousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = pereviousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
  });
  
  document.getElementById("btn-case-minus").addEventListener("click", function () {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const pereviousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = pereviousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
  }); */
// Or
function caseNumberUpdate(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const pereviousCaseNumber = parseInt(caseNumberString);
  let newCaseNumber;

  if (isIncrease === true) {
    newCaseNumber = pereviousCaseNumber + 1;
  } else {
    newCaseNumber = pereviousCaseNumber - 1;
  }

  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotal(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = caseNumberUpdate(true);
  updateCaseTotal(newCaseNumber);
  calculateSubTotal();
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
  const newCaseNumber = caseNumberUpdate(false);
  updateCaseTotal(newCaseNumber);
  calculateSubTotal();
});
