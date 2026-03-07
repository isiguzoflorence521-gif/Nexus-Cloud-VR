/**
 * Nexus Cloud VR Backend
 * Handles user sessions and status updates
 */

function doGet(e) {
  return HtmlService.createHtmlOutput("<h1>Nexus Cloud VR Dashboard Active</h1>");
}

function logSession(userId) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([new Date(), userId, "Session Started"]);
}
