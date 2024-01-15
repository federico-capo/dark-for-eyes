chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "cambiaColore") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; 
  }
  if (request.action === "rimuoviColore") {
    document.body.style.backgroundColor = "";
    document.body.style.color = ""; 
  }
  if (request.action === "amazon") {
    document.getElementById("pageContent").style.backgroundColor = "blue";
  }
});
