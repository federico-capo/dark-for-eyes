document.addEventListener("DOMContentLoaded", function () {
  var CambioON = document.getElementById("on");//id da home.html
  var CambioOFF = document.getElementById("off");//id da home.html
  var Amazon = document.getElementById("amazon");//id da home.html

  CambioON.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "cambiaColore" });
    });
  });
  CambioOFF.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "rimuoviColore" });
    });
  });
  //amazon
  Amazon.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "amazon" });
    });
  });
});
