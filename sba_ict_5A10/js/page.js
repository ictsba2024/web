window.addEventListener("scroll", function(){
    document.querySelector("nav").classList.toggle('sticky', window.scrollY > 0);
  });

  document.querySelector('.menu-btn').addEventListener("click", () => {
    document.querySelector('.menu').classList.add('active');
  });

  document.querySelector('.close-btn').addEventListener("click", () => {
    document.querySelector('.menu').classList.remove('active');
  });
  
  // Helper functions for cookies
function setCookie(name, value, minutes) {
  let date = new Date();
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  let cname = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cname) === 0) {
      return cookie.substring(cname.length, cookie.length);
    }
  }
  return "";
}

// Screen time control
let timeSpent = parseInt(getCookie("timeSpent")) || 0;
let timeLimit = 10000000000;
let blockedUntil = parseInt(getCookie("blockedUntil")) || 0;
let currentTime = new Date().getTime();

if (currentTime < blockedUntil) {
  alert("You have reached the time limit. Please look at somthing 20 feet away for 20 seconds.");
  window.location.href = "about:blank";
   
} else {
  let timer = setInterval(() => { 
    timeSpent += 1000;
    setCookie("timeSpent", timeSpent, 1); 

    if (timeSpent >= timeLimit) {
      clearInterval(timer);
      setCookie("blockedUntil", currentTime + 60 * 1000, 1);
      alert("You have reached the time limit. Please look at somthing 20 feet away for 20 seconds.");
      window.location.href = "about:blank";
    }
  }, 1000);
}