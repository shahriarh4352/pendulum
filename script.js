console.log("JavaScript is working!");
// Select all sections
const sections = document.querySelectorAll('.section');

// Prevent cache by adding a timestamp to resources
const cssLink = document.querySelector('link[rel="stylesheet"]');
cssLink.href = cssLink.href + '?v=' + new Date().getTime();
