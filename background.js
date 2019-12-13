// function createWindow () {
//     chrome.windows.create(
//       {
//         url: chrome.extension.getURL("uwuify.html"),
//         type: "panel",
//         focused: true,
//         top: 60,
//         left: 20,
//         width: 200,
//         height: 200
//       },
//       window => {
//         window.WindowType = "app";
//         window.alwaysOnTop = true;
//       }
//     );
//   }
  
//   // Called when the user clicks on the browser action.
//   chrome.browserAction.onClicked.addListener((tab) => {
//     alert("test alert")
//     createWindow(); 
//   });

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "uwuify.js"});
 });