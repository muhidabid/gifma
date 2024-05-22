// const resizableDiv = document.getElementById('resizableDiv');
// let startX;
// let startWidth;

// resizableDiv.addEventListener('mousedown', function(event) {
//   startX = event.clientX;
//   startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
  
//   document.addEventListener('mousemove', resize);
//   document.addEventListener('mouseup', stopResize);
// });

// function resize(event) {
//   resizableDiv.style.width = startWidth + event.clientX - startX + 'px';
// }

// function stopResize() {
//   document.removeEventListener('mousemove', resize);
// }

// -----------------------------------

// const resizableDiv = document.getElementById('resizableDiv');
// const leftBar = document.querySelector('.resizable-bar-left');
// const rightBar = document.querySelector('.resizable-bar-right');
// let startX;
// let startWidth;

// leftBar.addEventListener('mousedown', function(event) {
//   startX = event.clientX;
//   startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
  
//   document.addEventListener('mousemove', resizeLeft);
//   document.addEventListener('mouseup', stopResize);
// });

// rightBar.addEventListener('mousedown', function(event) {
//   startX = event.clientX;
//   startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
  
//   document.addEventListener('mousemove', resizeRight);
//   document.addEventListener('mouseup', stopResize);
// });

// function resizeLeft(event) {
//   const width = startWidth - (event.clientX - startX);
//   resizableDiv.style.width = width + 'px';
//   resizableDiv.style.marginLeft = event.clientX - startX + 'px';
// }

// function resizeRight(event) {
//   resizableDiv.style.width = startWidth + (event.clientX - startX) + 'px';
// }

// function stopResize() {
//   document.removeEventListener('mousemove', resizeLeft);
//   document.removeEventListener('mousemove', resizeRight);
// }

const resizableDiv = document.getElementById('resizableDiv');
const leftBar = document.querySelector('.resizable-bar-left');
const rightBar = document.querySelector('.resizable-bar-right');
let startX;
let startWidth;

leftBar.addEventListener('mousedown', function(event) {
  startX = event.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
  
  document.addEventListener('mousemove', resizeLeft);
  document.addEventListener('mouseup', stopResize);
});

rightBar.addEventListener('mousedown', function(event) {
  startX = event.clientX;
  startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
  
  document.addEventListener('mousemove', resizeRight);
  document.addEventListener('mouseup', stopResize);
});

function resizeLeft(event) {
  const width = startWidth - (event.clientX - startX);
  resizableDiv.style.width = width + 'px';
}

function resizeRight(event) {
  resizableDiv.style.width = startWidth + (event.clientX - startX) + 'px';
}

function stopResize() {
  document.removeEventListener('mousemove', resizeLeft);
  document.removeEventListener('mousemove', resizeRight);
}