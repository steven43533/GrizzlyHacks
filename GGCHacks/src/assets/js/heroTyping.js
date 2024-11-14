document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to Grizzly Hacks";
    const typingEffectElement = document.querySelector(".typing-effect");
    const cursorElement = document.querySelector(".cursor");
    let index = 0;
  
    function typeLetter() {
      if (index < text.length) {
        typingEffectElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 150); // Typing speed
      } else {
        cursorElement.style.animation = "blink 0.7s step-start infinite"; // Blinking cursor
      }
    }
  
    if (typingEffectElement && cursorElement) {
      typeLetter();
    } else {
      console.error("Typing effect elements not found!");
    }
  });