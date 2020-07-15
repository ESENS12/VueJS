
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    if  (request.action == "getBackground"){
      sendResponse("this is message from background2");
      console.log("html : " , document.body.outerHTML);
      savePage();
    }

    if (request.action == "getSource"){
      console.log("executeScript success : ", request );
    }
      // sendResponse({response: "goodbye"});
  }); 

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"getpagesSource.js"});
});

function savePage(tabId) {
  console.log('savePage!');
  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function () {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      console.log("executeScript error : ", chrome.runtime.lastError);
      //   message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }else{

    }
  });
}