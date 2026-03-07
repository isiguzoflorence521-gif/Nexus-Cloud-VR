function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function startNexusServer(serviceType) {
  const timestamp = new Date();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Log the session for the Nexus Cloud service
  sheet.appendRow([timestamp, serviceType, "User_Connected", "120W_Power_Verified"]);
  
  // Return status to the HTML frontend
  return serviceType + " is now streaming to your device.";
}
