/**
 * NEXUS CLOUD VR (NCVR) BACKEND
 * Core Logic for Protocol Swapping & Telemetry
 */

const SHEET_NAME = "Settings";
const LOG_SHEET = "Logs";

// 1. GET: Returns the active protocol to your Shadow PC's .bat file
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  // Get Protocol from Cell B1 (e.g., "iVRy", "VRidge", "Trinus")
  const activeProtocol = sheet.getRange("B1").getValue();
  
  // Return plain text so NCVR_Switch.bat can read it easily with curl
  return ContentService.createTextOutput(activeProtocol);
}

// 2. POST: Receives log data from the Shadow PC session_log.txt
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const logSheet = ss.getSheetByName(LOG_SHEET);
  
  try {
    // Extract parameters sent via curl -d
    const status = e.parameter.status || "Unknown";
    const proto = e.parameter.proto || "None";
    const machine = e.parameter.machine || "Shadow-PC";
    const logEntry = e.parameter.log_entry || "No log provided";

    // Append to Log Sheet: [Timestamp, Machine, Protocol, Status/Details]
    logSheet.appendRow([new Date(), machine, proto, status, logEntry]);
    
    return ContentService.createTextOutput("NCVR Log Received: Success");
  } catch (err) {
    return ContentService.createTextOutput("NCVR Error: " + err.message);
  }
}

// 3. OPTIONAL: Function to create the dashboard layout if it doesn't exist
function setupNexusSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Setup Settings Sheet
  let settings = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  settings.getRange("A1:B1").setValues([["ACTIVE PROTOCOL:", "iVRy"]]);
  settings.getRange("B1").setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(["iVRy", "VRidge", "Trinus", "ALVR"]).build()
  );

  // Setup Logs Sheet
  let logs = ss.getSheetByName(LOG_SHEET) || ss.insertSheet(LOG_SHEET);
  logs.getRange("A1:E1").setValues([["Timestamp", "Machine", "Protocol", "Status", "Detailed Log"]]);
}
