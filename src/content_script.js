// Inject a button into the Gmail message field
let button = document.createElement('button');
button.innerHTML = 'Process Text';
button.onclick = function() {
  // Capture the message body text
  let messageBody = document.querySelector('.editable[aria-label="Message Body"]');
  let text = messageBody.innerText;

  // Send the text to the extension's background page for processing
  chrome.runtime.sendMessage({text: text}, function(response) {
    // Update the message body text with the processed text
    messageBody.innerText = response.text;
  });
};

// Insert the button into the Gmail message field
let toolbar = document.querySelector('.G-atb');
toolbar.appendChild(button);