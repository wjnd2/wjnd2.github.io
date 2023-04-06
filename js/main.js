const phrases = ["Ich bin Janis.", "Ich designe Frontend.", "Ich bin ein Gamer.", "Ich code Backend.", "Ich bin 15 Jahre alt."];
let currentPhrase = 0;
let letterIndex = 0;
let phraseIndex = 0;
const typeDelay = 50;
const deleteDelay = 50;
const newTextDelay = 2000;
const heading = document.getElementById("typewriter");


function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    heading.textContent += phrases[phraseIndex][letterIndex];
    letterIndex++;
    setTimeout(type, typeDelay);
  } else {
    setTimeout(deletePhrase, newTextDelay);
  }
}

function deletePhrase() {
    if (letterIndex > 0) {
      heading.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(deletePhrase, deleteDelay);
    } else {
      if (phraseIndex === phrases.length - 1) {
        heading.textContent = "";
        phraseIndex = 0;
      } else {
        phraseIndex++;
      }
      setTimeout(type, typeDelay + 100);
    }
  }
  
function runcheck1() {
  var width = window.innerWidth;
  var header = document.getElementById("header");
  var green = document.getElementById("green");

  if (width < 350) {
    header.textContent = "JW"
  }
  else {
    header.textContent = "Janis Winkelmann"
  }

  if (width < 1170) {
    green.onclick = null; 
    green.setAttribute("title", "Deaktiviert für Gerät")
  }
  else {
    green.onclick = "maximize()";
    green.setAttribute("data-original-title", "Vollbild")
    green.innerHTML = '<div class="traffic-light green" data-toggle="tooltip" onclick="maximize()" id="green" data-original-title="Vollbild"></div>'
  }
}

function runcheck2() {
  var width = window.innerWidth;
  var header = document.getElementById("header");
  var green = document.getElementById("green");

  if (width < 350) {
    header.textContent = "JW"
  }
  else {
    header.textContent = "Janis Winkelmann"
  }

  if (width < 1170) {
    green.onclick = null; 
    green.setAttribute("data-original-title", "Deaktiviert für Gerät")
  }
  else {
    green.onclick = "maximize()";
    green.setAttribute("data-original-title", "Vollbild")
    green.innerHTML = '<div class="traffic-light green" data-toggle="tooltip" onclick="maximize()" id="green" data-original-title="Vollbild"></div>'
  }
}

function disable_animations() {
  document.getElementById("red").setAttribute('transition-style', null);
  document.getElementById("yellow").setAttribute('transition-style', null);
  document.getElementById("green").setAttribute('transition-style', null);
  document.getElementById("header").setAttribute('transition-style', null);
  document.getElementById("hi").setAttribute('transition-style', null);
  document.getElementById("abt-me").setAttribute('transition-style', null);
  document.getElementById("ul").setAttribute('transition-style', null);
}

function show_sec() {
  document.getElementById("sec").style.top = "93%"
}

window.addEventListener("resize", function() {
  runcheck2();
});
  

document.addEventListener("DOMContentLoaded", function() {
  runcheck1();
  setTimeout(function() {
    $(".main-container").toggleClass("initial");
  }, 200);
  });
  setTimeout(type, 2700);
  setTimeout(show_sec, 5200);
  setTimeout(disable_animations, 7000);

function timingFunction(timeFraction) {
  return 1 - Math.pow(1 - timeFraction, 2);
}

function scrollToY(scrollYPosition) {
  let startScrollY = window.scrollY;
  let endScrollY = scrollYPosition;
  let scrollDistance = endScrollY - startScrollY;
  let startTime = performance.now();

  function scrollStep(currentTime) {
    let elapsedTime = currentTime - startTime;
    let timeFraction = elapsedTime / 1200;
    if (timeFraction > 1) timeFraction = 1;

    let scrollProgress = timingFunction(timeFraction);
    let scrollPosition = startScrollY + (scrollDistance * scrollProgress);

    window.scrollTo(0, scrollPosition);

    if (timeFraction < 1) {
      requestAnimationFrame(scrollStep);
    }
    else {
      document.body.style.pointerEvents = 'auto';
    }
  }
  document.body.style.pointerEvents = 'none';
  requestAnimationFrame(scrollStep);
}

function maximize() {
  var green = document.getElementById("green");
  var mainContainer = $('.main-container');
  mainContainer.toggleClass("maximized");
  if (mainContainer.hasClass("maximized")) {
    green.setAttribute("data-original-title", "Fenster")
  }
  else {
    green.setAttribute("data-original-title", "Vollbild")
  }
}

function minimize() {
  $('.main-container').toggleClass('minimized');
  setTimeout(function() {
    $(".main-container").toggleClass("hidden");
  }, 200);
  setTimeout(function() {
    $('.dropdown').slideToggle('0.2s');
  }, 100);
}

function unminimize() {
  $('.dropdown').slideToggle('0.2s');
  $(".main-container").toggleClass("hidden");
  setTimeout(function() {
    $('.main-container').toggleClass("minimized");
  }, 200);
}

function close_() {
  var bg = document.getElementById("bg")
  bg.classList.add("bg-wrapper-show")
  $('.chrome-wrapper').toggleClass('chrome-wrapper-show');
  $('.main-container').toggleClass('minimized');
  setTimeout(function() {
    $(".main-container").toggleClass("hidden");
  }, 200);
  setTimeout(function() {
    $('.chrome-wrapper').toggleClass('transition');
  }, 500);
  bg.classList.remove("bg-wrapper-hide")
}

function unclose_() {
  $(".main-container").toggleClass("hidden");
  var bg = document.getElementById("bg")
  bg.classList.add("bg-wrapper-hide")
  setTimeout(function() {
    $('.main-container').toggleClass("minimized");
  }, 200);
  bg.classList.remove("bg-wrapper-show")
  setTimeout(function() {
    $('.chrome-wrapper').toggleClass('chrome-wrapper-show');
    $('.chrome-wrapper').toggleClass('transition');
  }, 1000);

  // $('.bg-wrapper').toggleClass('bg-wrapper-show');
  // $('.chrome-wrapper').toggleClass('chrome-wrapper-show');
  // $('.main-container').toggleClass('minimized');
  // setTimeout(function() {
  //   $(".main-container").toggleClass("hidden");
  // }, 200);
  // setTimeout(function() {
  //   $('.chrome-wrapper').toggleClass('transition');
  // }, 700);
}

function scrollcheck () {
  movedown = document.getElementById("movedown")
  header = document.getElementById("header1")

  if (window.scrollY >= 1) {
    header.style.marginTop = "-52px"
    header.style.fontSize = "40px"
    header.style.opacity = "1"
    movedown.style.transform = "scale(0)";
  } else {
    header.style.marginTop = "0px"
    header.style.fontSize = "35px"
    header.style.opacity = "0.4"
    movedown.style.transform = "scale(1)";
  }
}

window.addEventListener("scroll", () => {
  scrollcheck();
});

scrollcheck();
