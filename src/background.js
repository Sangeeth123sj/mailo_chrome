console.log("background mailo running")
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Process the text and send back the processed text
    let processedText = processText(request.text);
    sendResponse({text: processedText});
  });
  
  function processText(text) {
    // Add your text processing logic here
    // For example, you could convert all text to uppercase
    return text.toUpperCase();
  }