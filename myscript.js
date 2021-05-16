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

  console.log(copyText);
  
  navigator.clipboard.writeText(copyText);

  
  document.getElementById("testText").innerHTML = copyText;

}

function mkObj_DF_close_approved_quote() { }
function mkObj_DF_critical_error() { }
function mkObj_DF_DFS_error() { }
function mkObj_DF_DPM_neg_value() { }
function mkObj_DF_finalise_plan() { }
function mkObj_DF_inbox_task_removal() { }
function mkObj_DF_incorrect_status() { }
function mkObj_DF_periodic_transport() { }
function mkObj_DF_plan_already_processed() { }
function mkObj_DF_stuck_qual_check() { }
function mkObj_DF_s100_stuck() {}
function mkObj_DF_sm_agreement_nogen() { }
function mkObj_doco_regen_template() { }
function mkObj_doco_retrig_template() { }
function mkObj_regen_monthly_summary() { }
