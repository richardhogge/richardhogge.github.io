// Background Video
const la = document.getElementById('la');
const video = document.getElementById('video');
const about = document.getElementById('about');

la.onmouseover = function() {
  video.style.opacity = '1';
  about.style.opacity = '0';
  // start video from beginning
}

la.onmouseout = function() {
  video.style.opacity = '0';
  about.style.opacity = '.4';
  // at end of video fade out anyway
}

// Obfuscate Email
const user = 'richard';
const site = 'tremolocreative.com';
const contact = document.getElementById('contact');

contact.href = 'mailto:' + user + '@' + site;

console.log('github connection test');