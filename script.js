const textContainer = document.getElementById("typing-text");

function typeText(text, element, callback) {
  let index = 0;

  function type() {
    element.innerHTML = text.substring(0, index);
    index++;

    if (index <= text.length) {
      setTimeout(type, 50); // Adjust typing speed here (e.g., increase to 100 for slower typing)
    } else {
      if (callback) callback();
    }
  }

  type(); // Start typing
}

const text1 = `I am an explorer of the digital universe, fluent in the languages of
            Node.js, JavaScript, Vue.js, Flutter, Python, PHP, and the art of
            DevOps. With each tool as a star in my toolkit, I journey through
            the vast expanse of cyberspace, orchestrating the flow of data and
            systems with precision and finesse.`;
const text2 = `In this cosmic playground of code, I craft solutions that transcend
            earthly bounds, solving complex problems with creativity and
            purpose. From the depths of backend realms to the frontiers of user
            interfaces, I navigate the interstellar pathways of technology,
            weaving together innovations that make a tangible impact on the
            world around us.`;

typeText(`<p>${text1}</p>`, textContainer, function () {
  setTimeout(() => {
    typeText(`<p>${text2}</p>`, textContainer);
  }, 1000); // Wait for 1 second before typing the second text
});
