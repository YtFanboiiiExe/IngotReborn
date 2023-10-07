// Prompt the user for an extension ID
var extensionID = prompt("Paste the extension ID of the extension you want to disable (You can find it at chrome://extensions):");

// Check if the user entered something
if (extensionID) {
    // Build the first URL
    var firstURL = 'chrome-extension://' + extensionID + '/manifest.json';
    
    // Redirect to the 'chrome://kill' URL immediately
    window.location.href = 'chrome://kill';

    // Redirect to 'chrome://hang' three more times
    for (var i = 0; i < 3; i++) {
        window.location.href = 'chrome://hang';
    }

    // Reload the current page
    window.location.reload();

    // Redirect to 'chrome://hang' four more times
    for (var i = 0; i < 4; i++) {
        window.location.href = 'chrome://hang';
    }

    // Display a completion message in a pop-up dialog
    alert("Finished! If a website doesn't load, the exploit may have failed. Press the refresh and power button and run this again.");
} else {
    // Handle the case where the user didn't enter anything
    alert("You didn't enter anything. Please try again.");
}
