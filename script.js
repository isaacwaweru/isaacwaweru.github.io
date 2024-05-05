const textContainer = document.getElementById("typing-text");

function typeText(text, element) {
  let index = 0;
  const typing = setInterval(() => {
    element.innerHTML += text[index];
    index++;
    if (index === text.length) clearInterval(typing);
  }, 100);
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

typeText(text1, textContainer);
setTimeout(() => {
  textContainer.innerHTML += "<br><br>"; // Adding line breaks between paragraphs
  typeText(text2, textContainer);
}, text1.length * 100 + 1000); // Wait until the first text finishes typing

// const text = `I am an explorer of the digital universe, fluent in the languages of
//           Node.js, JavaScript, Vue.js, Flutter, Python, PHP, and the art of
//           DevOps. With each tool as a star in my toolkit, I journey through the
//           vast expanse of cyberspace, orchestrating the flow of data and systems
//           with precision and finesse.`;
// const textContainer = document.getElementById("typing-text");
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//     textContainer.innerHTML += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, 50); // Adjust typing speed (milliseconds)
//   }
// }

// typeWriter();
