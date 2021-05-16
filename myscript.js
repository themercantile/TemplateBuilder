// The purpose of this script is to copy the template input to the clipboard so it can be pasted to Services Australia or Jira.

// function copyToClipboard() {
//   let fullURL = document.getElementById("fullURL").value;
//   console.log(fullURL);
//   let recordVar = document.getElementById("recordVar").value;
//   if (fullURL.search(recordVar)===-1) { // This line is searching for the string in the URL. If it isn't there a -1 is returned.
//     document.getElementById("outURL").innerHTML = "ERROR!";
//     document.getElementById("batchURL").innerHTML = "ERROR!";
//     return;
//   }
//   console.log(recordVar);
//   let excelCell = "\", " + document.getElementById("excelCell").value + ", \"";
//   console.log(excelCell);
//   let newURL = "=HYPERLINK(CONCATENATE(\"" + fullURL.replace(recordVar, excelCell) + "\"), \"Open Hyperlink\")";
//   console.log(newURL);
//   let chromeURL = "=CONCATENATE(\"start chrome " + fullURL.replace(recordVar, excelCell) + "\")";
//   document.getElementById("outURL").innerHTML = newURL;
//   document.getElementById("batchURL").innerHTML = chromeURL;
// }

function makeObj_accruals_template() {

  //document.getElementById("testText").innerHTML = "Hello";

  let accTitle = document.getElementById("accTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let providerNumber = document.getElementById("providerNumber").value;
  let sbNumber = document.getElementById("sbNumber").value;

  let sbYes = document.getElementById("sbYes").checked;
  let sbNo = document.getElementById("sbNo").checked;
  let sbCancelled = "";

  if (sbYes) {
    sbCancelled = "Yes";
  } else {
    sbCancelled = "No";
  }

  let actionReq = document.getElementById("actionReq").value;
  let accCategory = document.getElementById("accCategory").value;
  let itemNumber = document.getElementById("itemNumber").value;
  let consumedBudget = document.getElementById("consumedBudget").value;

  const copyText = `
    Title: ${accTitle}
    Participant Number: ${participantNumber}
    Provider Number: ${providerNumber}
    Service Booking Number: ${sbNumber}
    Has the Service Booking been cancelled? ${sbCancelled}
    Action Required: ${actionReq}
    Category: ${accCategory}
    Item Number (if applicable): ${itemNumber}
    Consumed Budget: ${consumedBudget}
  `;

  console.log(copyText);
  
  navigator.clipboard.writeText(copyText);

  
  document.getElementById("testText").innerHTML = copyText;

}

// Title:
// Participant Number:
// Provider Number:
// Service Booking Number:
// Has the Service Booking been cancelled?
// Action Required:
// Category:
// Item Number (if applicable):
// Consumed Budget:

// Please assign to yourself in NDIA Retriggers and Accruals
// accTitle
// participantNumber
// providerNumber
// sbNumber
// sbYes
// sbNo
// actionReq
// accCategory
// itemNumber
// consumedBudget

