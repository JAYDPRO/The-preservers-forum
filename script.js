function openWebsite() {
  // Open the website in a new tab/window
  window.open('https://example.com', '_blank');
}

document.getElementById('signup-link').addEventListener('click', function(event) {
  event.preventDefault();
  // Open the website in the browser
  window.open('https://thepreservers.com', '_system');
});