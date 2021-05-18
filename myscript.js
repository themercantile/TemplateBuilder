// The purpose of this script is to copy the template input to the clipboard so it can be pasted to Services Australia or Jira.

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

  // console.log(copyText);  
  navigator.clipboard.writeText(copyText);  
  // document.getElementById("testText").innerHTML = copyText;
}

/* *************************************************** */
mkObj_DF_close_approved_quote()
function mkObj_DF_close_approved_quote() {   
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let quoteItem = document.getElementById("quoteItem").value;
  let quoteStatus = document.getElementById("quoteStatus").value;
  let quoteApproved = document.getElementById("quoteApproved").value;
  let sbNumber = document.getElementById("sbNumber").value;
  let relatedTasks = document.getElementById("relatedTasks").value;

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Quote Item: ${quoteItem}
    Status of Quote: ${quoteStatus}
    Has quote been approved?: ${quoteApproved}
    Service booking number: ${sbNumber}
    Related Tasks: ${relatedTasks}    
  `;

  navigator.clipboard.writeText(copyText);

}

/* *************************************************** */

function mkObj_DF_critical_error() { 
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let planDates = document.getElementById("planDates").value;
  let errorMessage = document.getElementById("errorMessage").value;
  let affectedTask = document.getElementById("affectedTask").value;

  let gotAccess = "";
  let accessYes = document.getElementById("accessYes").value;
  let accessNo = document.getElementById("accessNo").value;
  if (accessYes) {
    gotAccess = "Yes";
  } else {
    gotAccess = "No";
  }

  let screenShot = "";
  let screenYes = document.getElementById("screenYes").value;
  let screenNo = document.getElementById("screenNo").value;
  if (screenYes) {
    screenShot = "Yes";
  } else {
    screenShot = "No";
  }

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Plan Dates: ${planDates}
    Error Message: ${errorMessage}
    Affected Task: ${affectedTask}
    Has the user withdrawn the application and then retried the task? ${gotAccess}
    Do you have a screenshot of error message with time/date stamp? ${screenShot}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */

function mkObj_DF_DFS_error() { 
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let errorMessage = document.getElementById("errorMessage").value;
  let errorLocation = document.getElementById("errorLocation").value;

  let triedTrick = "";
  let trickYes = document.getElementById("trickYes").value;
  let trickNo = document.getElementById("trickNo").value;
  if (trickYes) {
    triedTrick = "Yes";
  } else {
    triedTrick = "No";
  }

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Error: ${errorMessage}
    Location of Error: ${errorLocation}
    Have you tried to generate the support plan and save trick? ${triedTrick}
  `;

  navigator.clipboard.writeText(copyText);

}

/* *************************************************** */

function mkObj_DF_DPM_neg_value() { 
  
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let planDates = document.getElementById("planDates").value;
  let errorMessage = document.getElementById("errorMessage").value;
  let negDetails = document.getElementById("negDetails").value;
  let lineChange = document.getElementById("lineChange").value;
  let catValue = document.getElementById("catValue").value;
  
  let isItApproved = "";
  let approveYes = document.getElementById("approveYes").value;
  let approveNo = document.getElementById("approveNo").value;
  if (approveYes) {
    isItApproved = "Yes";
  } else {
    isItApproved = "No";
  }

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Plan Dates: ${planDates}
    Error Message (if any): ${errorMessage}
    In Determine Plan Management, what's the negative category and amount: ${negDetails}
    Proposed quantity/frequency this needs to be changed to? ${lineChange}
    Value the category should be changed to? ${catValue}
    Have you attached an email containing minimum EL2 approval and what the budget needs to be changed to? ${isItApproved}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */

function mkObj_DF_finalise_plan() { 
  
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let planDates = document.getElementById("planDates").value;
  let issueMessage = document.getElementById("issueMessage").value;

  let isItApproved = "";
  let approvedYes = document.getElementById("approvedYes").value;
  let approvedNo = document.getElementById("approvedNo").value;
  if (approvedYes) {
    isItApproved = "Yes";
  } else {
    isItApproved = "No";
  }

  let docGenerated = "";
  let genYes = document.getElementById("genYes").value;
  let genNo = document.getElementById("genNo").value;
  if (genYes) {
    docGenerated = "Yes";
  } else {
    docGenerated = "No";
  }

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Plan Dates: ${planDates}
    Issue Description: ${issueMessage}
    Is the Plan status listed as Approved? ${isItApproved}
    Is there are Plan Approval documented generated? ${docGenerated}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */

function mkObj_DF_inbox_task_removal() { 
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let removeAttempt = document.getElementById("removeAttempt").value;
  let errorMessage = document.getElementById("errorMessage").value;
  let userRequest = document.getElementById("userRequest").value;
  
  let screenShot = "";
  let screenYes = document.getElementById("screenYes").value;
  let screenNo = document.getElementById("screenNo").value;
  if (screenYes) {
    screenShot = "Yes";
  } else {
    screenShot = "No";
  }

  let docClosed = "";
  let closedYes = document.getElementById("closedYes").value;
  let closedNo = document.getElementById("closedNo").value;
  if (closedYes) {
    docClosed = "Yes";
  } else {
    docClosed = "No";
  }

  const copyText = `
    Title: ${dataFixTitle}
    What has the user done to try remove the task?  ${removeAttempt}
    Error Message (if any): ${errorMessage}
    What does the user want done? ${userRequest}
    Screenshot of error included (including time/date)? ${screenShot}
    Confirmed related quote is closed in CRM? ${docClosed}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_DF_incorrect_status() { 

  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let incStatus = document.getElementById("incStatus").value;

  let isAccessMet = "";
  let accessMetYes = document.getElementById("accessMetYes").value;
  let accessMetNo = document.getElementById("accessMetNo").value;
  if (accessMetYes) {
    isAccessMet = "Yes";
  } else {
    isAccessMet = "No";
  }

  let gotAccess = "";
  let accessYes = document.getElementById("accessYes").value;
  let accessNo = document.getElementById("accessNo").value;
  if (accessYes) {
    gotAccess = "Yes";
  } else {
    gotAccess = "No";
  }

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Incorrect Status: ${incStatus}
    Does overview show access is met? ${isAccessMet}
    Does the "Determine Access Decision" say "Access Met"? ${gotAccess}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_DF_periodic_transport() { 
  console.log(document.querySelectorAll('*[id]'));
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let planDates = document.getElementById("planDates").value;
  let paySchedMissing = document.getElementById("paySchedMissing").value;
  let periodicTick = document.getElementById("periodicTick").value;
  let autoClaim = document.getElementById("autoClaim").value;
  let correctAddress = document.getElementById("correctAddress").value;
  let correctBank = document.getElementById("correctBank").value;

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Affected plan numbers: ${planNumber}
    Affected plan dates: ${planDates}
    Is the payment schedule missing for the affected plans? ${paySchedMissing}
    Does the "Determine Funded Supports" screen show transport and is it ticked? ${periodicTick}
    Does the "Determine Plan Management" screen show transport as "Automatic Periodic Claim"? ${autoClaim}
    Is the home address for the participant/nominee correct? ${correctAddress}
    Are the bank details correct for the participant/nominee? ${correctBank}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_DF_plan_already_processed() { 
  
  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let appStatus = document.getElementById("appStatus").value;
  let errorText = document.getElementById("errorText").value;
  let delegateID = document.getElementById("delegateID").value;

  let isPlanApproved = "";
  let approveYes = document.getElementById("approveYes").value;
  let approveNo = document.getElementById("approveNo").value;
  if (approveYes) {
    isPlanApproved = "Yes";
  } else {
    isPlanApproved = "No";
  }

  let screenShot = "";
  let screenYes = document.getElementById("screenYes").value;
  let screenNo = document.getElementById("screenNo").value;
  if (screenYes) {
    screenShot = "Yes";
  } else {
    screenShot = "No";
  }
  
  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Staff user ID of reporter: ${delegateID}
    Application Status: ${appStatus}
    Error Text: ${errorText}
    Is the Finalise and Approve Plan task ticked? ${delegateID}
    Have you included screenshot of error message with time/date? ${screenShot}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_DF_stuck_qual_check() { 

  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let incStatus = document.getElementById("incStatus").value;
  let reasonCode = document.getElementById("reasonCode").value;
  let delegateID = document.getElementById("delegateID").value;

  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number/Eligibility Reassessment task number: ${planNumber}
    Incorrect Status: ${incStatus}
    Reason code selected for the access decision/pathway: ${reasonCode}
    User ID of staff reporter: ${delegateID}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_DF_s100_stuck() {

  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let taskID = document.getElementById("taskID").value;
  let navResults = document.getElementById("navResults").value;
  let userReq = document.getElementById("userReq").value;

  //let testText = document.getElementById("testText").value;
  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Task ID for Unactionable Task: ${taskID}
    Navigation Button Results ${navResults}
    What does the user want done? ${userReq}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_DF_sm_agreement_nogen() { 

  let dataFixTitle = document.getElementById("dataFixTitle").value;
  let participantNumber = document.getElementById("participantNumber").value;
  let planNumber = document.getElementById("planNumber").value;
  let planDates = document.getElementById("planDates").value;
  let errorCategory = document.getElementById("errorCategory").value;
  let errorIssue = document.getElementById("errorIssue").value;

  let gotEmail = "";
  let emailYes = document.getElementById("emailYes").value;
  let emailNo = document.getElementById("emailNo").value;
  if (emailYes) {
    gotEmail = "Yes";
  } else {
    gotEmail = "No";
  }
  const copyText = `
    Title: ${dataFixTitle}
    Participant Number: ${participantNumber}
    Plan Number: ${planNumber}
    Plan Dates: ${planDates}
    What category is causing the issue? ${errorCategory}
    What's the issue? ${errorIssue}
    Have you attached approval email from EL2 or above? ${gotEmail}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_doco_regen_template() { 

  let regenTitle = document.getElementById("regenTitle").value;
  let custNumber = document.getElementById("custNumber").value;

  let payFound = "";
  let foundYes = document.getElementById("foundYes").value;
  let foundNo = document.getElementById("foundNo").value;
  if (foundYes) {
    payFound = "Yes";
  } else {
    payFound = "No";
  }

  let transFound = "";
  let transYes = document.getElementById("transYes").value;
  let transNo = document.getElementById("transNo").value;
  if (transYes) {
    transFound = "Yes";
  } else {
    transFound = "No";
  }

  let datesSearched = document.getElementById("datesSearched").value;
  let payDetails = document.getElementById("payDetails").value;

  const copyText = `
    Title: ${regenTitle}
    Participant Number: ${custNumber}
    Can you find the payment summary? ${payFound}
    Can you find relevant transactions in outbound documents? ${transFound}
    What dates (From --> To) have you searched in outbound documents? ${datesSearched}
    Pay Run Details (From Payment Summary - Date, Amount, Clearing Number): ${payDetails}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */


function mkObj_doco_retrig_template() { 
  
  let retrigTitle = document.getElementById("retrigTitle").value;
  let custNumber = document.getElementById("custNumber").value;
  let docType = document.getElementById("docType").value;
  let docStatus = document.getElementById("docStatus").value;
  let createdDate = document.getElementById("createdDate").value;
  let transNumber = document.getElementById("transNumber").value;
  let failReason = document.getElementById("failReason").value;

  let docFail = "";
  let failYes = document.getElementById("failYes").value;
  let failNo = document.getElementById("failNo").value;
  if (failYes) {
    docFail = "Yes";
  } else {
    docFail = "No";
  }

  const copyText = `
    Title: ${retrigTitle}
    Participant Number: ${custNumber}
    Document Type: ${docType}
    Document Status: ${docStatus}
    Date Created: ${createdDate}
    Transaction Number: ${transNumber}
    Reason for failure: ${failReason}
    Has the failure been fixed? ${docFail}
  `;

  navigator.clipboard.writeText(copyText);
}

/* *************************************************** */

function mkObj_regen_monthly_summary() { 
  
  let regenTitle = document.getElementById("regenTitle").value;
  let custNumber = document.getElementById("custNumber").value;

  let foundDoc = "";
  let foundYes = document.getElementById("foundYes").value;
  let foundNo = document.getElementById("foundNo").value;
  if (foundYes) {
    foundDoc = "Yes";
  } else {
    foundDoc = "No";
  }

  let datesSearched = document.getElementById("datesSearched").value;

  const copyText = `
    Title: ${regenTitle}
    Participant/Provider Number: ${custNumber}
    Is there a payment in the relevant months? ${foundDoc}
    What months is the provider missing summaries for? ${datesSearched}
  `;

  navigator.clipboard.writeText(copyText);
}