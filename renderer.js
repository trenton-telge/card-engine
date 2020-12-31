// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var lbarExpanded = true;
var rbarExpanded = true;

document.querySelector('#lbar-button').addEventListener('click', () => {
    if (lbarExpanded) {
        document.getElementById('lbar').style.width = '32px';
        document.getElementById('lbar-button').innerText = 'keyboard_arrow_right';
        document.getElementById('lbar-content').style.display = 'none';
        lbarExpanded = false;
    } else {
        document.getElementById('lbar').style.width = '20%';
        document.getElementById('lbar-button').innerText = 'keyboard_arrow_left';
        document.getElementById('lbar-content').style.display = 'flex';
        lbarExpanded = true;
    }
})
document.querySelector('#rbar-button').addEventListener('click', () => {
    if (rbarExpanded) {
        document.getElementById('rbar').style.width = '32px';
        document.getElementById('rbar-button').innerText = 'keyboard_arrow_left';
        document.getElementById('rbar-content').style.display = 'none';
        rbarExpanded = false;
    } else {
        document.getElementById('rbar').style.width = '20%';
        document.getElementById('rbar-button').innerText = 'keyboard_arrow_right';
        document.getElementById('rbar-content').style.display = 'flex';
        rbarExpanded = true;
    }
})