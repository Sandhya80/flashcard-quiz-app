// Initial flashcards for JavaScript, HTML5, and CSS3 categories (no repetitions)
let flashcards = [
  // JavaScript Questions
  { question: "What is the output of 'typeof NaN'?", answer: "number", category: "JavaScript" },
  { question: "What does 'parseInt' do in JavaScript?", answer: "Converts a string to an integer", category: "JavaScript" },
  { question: "What is the purpose of 'JSON.stringify()'?", answer: "Converts a JavaScript object to a JSON string", category: "JavaScript" },
  { question: "What is the difference between 'let' and 'var'?", answer: "'let' is block-scoped, 'var' is function-scoped", category: "JavaScript" },
  { question: "What does '=== operator do in JavaScript?", answer: "Strict equality comparison", category: "JavaScript" },
  { question: "How do you create a function in JavaScript?", answer: "function myFunction() {}", category: "JavaScript" },
  { question: "What is an array in JavaScript?", answer: "A list-like object that can hold multiple values", category: "JavaScript" },
  { question: "How do you declare a variable in JavaScript?", answer: "Using var, let, or const", category: "JavaScript" },
  { question: "What is the purpose of 'console.log()'?", answer: "Outputs data to the console", category: "JavaScript" },
  { question: "What does 'undefined' mean in JavaScript?", answer: "'undefined' means a variable has been declared but not assigned a value", category: "JavaScript" },
  { question: "What does 'let' do in JavaScript?", answer: "Declares a block-scoped variable.", category: "JavaScript" },
  { question: "What is the output of 2 + '2' in JavaScript?", answer: "'22' (string concatenation)", category: "JavaScript" },
  { question: "What keyword is used to declare a constant in JavaScript?", answer: "const", category: "JavaScript" },
  { question: "What does '===' do in JavaScript?", answer: "Strict equality comparison", category: "JavaScript" },
  { question: "What is the purpose of 'this' in JavaScript?", answer: "Refers to the current object", category: "JavaScript" },
  { question: "What does 'var' do in JavaScript?", answer: "Declares a variable (function-scoped)", category: "JavaScript" },
  { question: "What is a closure in JavaScript?", answer: "A function with access to its own scope, the outer function's scope, and the global scope", category: "JavaScript" },
  { question: "Which method converts a JSON string into a JavaScript object?", answer: "JSON.parse()", category: "JavaScript" },
  { question: "How do you write a single-line comment in JavaScript?", answer: "//", category: "JavaScript" },
  { question: "Which array method adds an element to the end of an array?", answer: "push()", category: "JavaScript" },
  { question: "What is the output of typeof null in JavaScript?", answer: "object", category: "JavaScript" },

  // HTML5
  { question: "What does HTML stand for?", answer: "HyperText Markup Language", category: "HTML5" },
  { question: "What is the purpose of the <title> tag in HTML?", answer: "Defines the title of the document", category: "HTML5" },
  { question: "Which HTML element is used to define the document type?", answer: "<!DOCTYPE html>", category: "HTML5" },
  { question: "What is the correct HTML element for inserting a line break?", answer: "<br>", category: "HTML5" },
  { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", answer: "alt", category: "HTML5" },
  { question: "What is the purpose of the <meta> tag in HTML?", answer: "Provides metadata about the HTML document", category: "HTML5" },
  { question: "Which tag is used to create a dropdown list in HTML?", answer: "<select>", category: "HTML5" },
  { question: "What does the <form> tag do in HTML?", answer: "Defines an HTML form for user input", category: "HTML5" },
  { question: "Which HTML tag is used for the largest heading?", answer: "<h1>", category: "HTML5" },
  { question: "Which attribute makes an input field required in HTML5?", answer: "required", category: "HTML5" },
  { question: "Which HTML tag is used to display an image?", answer: "<img>", category: "HTML5" },
  { question: "Which HTML tag is used for a line break?", answer: "<br>", category: "HTML5" },
  { question: "Which HTML tag is used for a hyperlink?", answer: "<a>", category: "HTML5" },
  { question: "What is the purpose of the <head> tag in HTML?", answer: "Contains meta-information about the document", category: "HTML5" },
  { question: "How do you make a list in HTML?", answer: "<ul> or <ol>", category: "HTML5" },
  { question: "What does the <a> tag define in HTML?", answer: "A hyperlink", category: "HTML5" },
  { question: "Which attribute is used for alternative text in images?", answer: "alt", category: "HTML5" },
  { question: "What is the correct doctype for HTML5?", answer: "<!DOCTYPE html>", category: "HTML5" },
  { question: "Which tag is used to create an unordered list?", answer: "<ul>", category: "HTML5" },

  // CSS3
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets", category: "CSS3" },
  { question: "How do you apply a CSS style to an HTML element?", answer: "Using a selector", category: "CSS3" },
  { question: "What is the correct CSS syntax to change the font size?", answer: "font-size: 16px;", category: "CSS3" },
  { question: "How do you add a comment in CSS?", answer: "/* This is a comment */", category: "CSS3" },
  { question: "Which property is used to change the background color?", answer: "background-color", category: "CSS3" },
  { question: "How do you select an element with class 'example' in CSS?", answer: ".example", category: "CSS3" },
  { question: "How do you select an element with id 'main' in CSS?", answer: "#main", category: "CSS3" },
  { question: "Which CSS property changes text color?", answer: "color", category: "CSS3" },
  { question: "Which CSS property sets the background color?", answer: "background-color", category: "CSS3" },
  { question: "How do you center a block element in CSS?", answer: "margin: auto;", category: "CSS3" },
  { question: "How do you apply a class to an element in CSS?", answer: ".classname", category: "CSS3" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets", category: "CSS3" },
  { question: "How do you make text bold in CSS?", answer: "font-weight: bold;", category: "CSS3" },
  { question: "Which property is used to change the font size?", answer: "font-size", category: "CSS3" },
  { question: "What does the 'display: flex' property do?", answer: "Enables flexbox layout", category: "CSS3" },
  { question: "How do you select all <p> elements inside a <div> in CSS?", answer: "div p", category: "CSS3" },
  { question: "Which property adds space inside an element's border?", answer: "padding", category: "CSS3" }
];

let score = 0; // User's score
let current = 0; // Index of current card
let filteredCards = [...flashcards]; // Cards filtered by category
let currentCategory = 'all'; // Current selected category

// DOM element references
const card = document.getElementById("flashcard");
const front = card.querySelector(".front");
const back = card.querySelector(".back");
const scoreDisplay = document.getElementById("score");
const categorySelect = document.getElementById("categorySelect");

// Save flashcards and score to localStorage
function saveToLocalStorage() {
  localStorage.setItem('flashcards', JSON.stringify(flashcards));
  localStorage.setItem('score', score);
}

// Load flashcards and score from localStorage
function loadFromLocalStorage() {
  const stored = localStorage.getItem('flashcards');
  const storedScore = localStorage.getItem('score');
  if (stored) flashcards = JSON.parse(stored);
  if (storedScore) score = parseInt(storedScore, 10);
}

// Render the current flashcard and choices
function renderCard() {
  if (!filteredCards.length) {
    front.textContent = "No cards!";
    back.textContent = "";
    document.getElementById('choices').innerHTML = '';
    return;
  }
  const cardObj = filteredCards[current];
  front.textContent = cardObj.question;
  back.textContent = cardObj.answer;
  scoreDisplay.textContent = score;
  renderChoices();
}

// Generate three choices (one correct, two random wrong)
function getRandomChoices(correctAnswer, category, cardObj) {
  if (cardObj && Array.isArray(cardObj.options) && cardObj.options.length === 3) {
    // Shuffle the options so the correct answer isn't always first
    return cardObj.options.slice().sort(() => Math.random() - 0.5);
  }
  // Otherwise, generate random options as before
  let pool = flashcards.filter(c => c.category === category && c.answer !== correctAnswer).map(c => c.answer);
  // If not enough wrong answers, add from other categories
  while (pool.length < 2) {
    let extra = flashcards.filter(c => c.answer !== correctAnswer && !pool.includes(c.answer)).map(c => c.answer);
    pool = pool.concat(extra);
    if (pool.length === 0) break;
  }
  // Shuffle and pick two wrong answers
  pool = pool.sort(() => Math.random() - 0.5).slice(0, 2);
  // Insert correct answer and shuffle
  const choices = [...pool, correctAnswer].sort(() => Math.random() - 0.5);
  return choices;
}

// Render the multiple choice buttons
function renderChoices() {
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  if (!filteredCards.length) return;
  const cardObj = filteredCards[current];
  // Pass the card object to getRandomChoices for possible predefined options
  const choices = getRandomChoices(cardObj.answer, cardObj.category, cardObj);
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.onclick = () => handleChoice(choice);
    choicesDiv.appendChild(btn);
  });
}

// Handle user selecting a choice
function handleChoice(selected) {
  const cardObj = filteredCards[current];
  card.classList.add('flipped');
  setTimeout(() => {
    if (selected === cardObj.answer) {
      score++;
    } else {
      score--;
    }
    scoreDisplay.textContent = score;
    saveToLocalStorage();
    setTimeout(() => {
      card.classList.remove('flipped');
      if (current < filteredCards.length - 1) {
        current++;
        renderCard();
      } else {
        // Show completion message
        front.textContent = "Quiz complete!";
        back.textContent = "";
        document.getElementById('choices').innerHTML = '';
        // Optionally: console.log('Quiz complete, total cards:', filteredCards.length);
      }
    }, 1200);
  }, 600);
}

// Filter cards by selected category
function filterByCategory(category) {
  currentCategory = category;
  filteredCards = (category === 'all')
    ? [...flashcards]
    : flashcards.filter(c => c.category === category);
  // Shuffle after filtering
  for (let i = filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
  }
  //console.log('Filtered cards:', filteredCards.map(c => c.question)); // Added for debugging purpose
  
  current = 0;
  renderCard();
}

// Shuffle the filtered cards
function shuffleCards() {
  for (let i = filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
  }
  current = 0;
  renderCard();
}

// Add new flashcard
document.getElementById('cardForm').onsubmit = function(e) {
  e.preventDefault();
  const q = document.getElementById('questionInput').value.trim();
  const a = document.getElementById('answerInput').value.trim();
  const c = document.getElementById('categoryInput').value;
  if (q && a && c) {
    flashcards.push({ question: q, answer: a, category: c });
    saveToLocalStorage();
    filterByCategory(currentCategory);
    this.reset();
  }
};

// Delete the current flashcard
document.getElementById('deleteBtn').onclick = function() {
  if (!filteredCards.length) return;
  const idx = flashcards.findIndex(c => c === filteredCards[current]);
  if (idx > -1) flashcards.splice(idx, 1);
  saveToLocalStorage();
  filterByCategory(currentCategory);
};

// Reset all flashcards and score
document.getElementById('resetBtn').onclick = function() {
  if (confirm("Are you sure you want to delete all flashcards?")) {
    flashcards = [];
    score = 0;
    saveToLocalStorage();
    filterByCategory('all');
  }
};

// Edit the current flashcard
document.getElementById('editBtn').onclick = function() {
  if (!filteredCards.length) return;
  document.getElementById('editForm').style.display = 'flex';
  const cardObj = filteredCards[current];
  document.getElementById('editQuestion').value = cardObj.question;
  document.getElementById('editAnswer').value = cardObj.answer;
  document.getElementById('editCategory').value = cardObj.category;
};

// Cancel editing
document.getElementById('cancelEdit').onclick = function() {
  document.getElementById('editForm').style.display = 'none';
};

// Save changes to the edited flashcard
document.getElementById('editForm').onsubmit = function(e) {
  e.preventDefault();
  const q = document.getElementById('editQuestion').value.trim();
  const a = document.getElementById('editAnswer').value.trim();
  const c = document.getElementById('editCategory').value;
  if (!filteredCards.length) return;
  const idx = flashcards.findIndex(ca => ca === filteredCards[current]);
  if (idx > -1) {
    flashcards[idx] = { question: q, answer: a, category: c };
    saveToLocalStorage();
    filterByCategory(currentCategory);
    document.getElementById('editForm').style.display = 'none';
  }
};

// Navigation: next card
document.getElementById('nextBtn').onclick = function() {
  if (!filteredCards.length) return;
  if (current < filteredCards.length - 1) {
    current++;
    renderCard();
  }
};

// Navigation: previous card
document.getElementById('prevBtn').onclick = function() {
  if (!filteredCards.length) return;
  if (current > 0) {
    current--;
    renderCard();
  }
};

// Flip the card manually
document.getElementById('flipBtn').onclick = function() {
  card.classList.toggle('flipped');
};

// Category filter change
categorySelect.onchange = function() {
  filterByCategory(this.value);
};

// Shuffle button click
document.getElementById('shuffleBtn').onclick = shuffleCards;

// Score reset button functionality
document.getElementById('scoreResetBtn').onclick = function() {
  score = 0;
  scoreDisplay.textContent = score;
  saveToLocalStorage();
};

// On page load: load data and render first card
window.onload = function() {
  loadFromLocalStorage();
  filterByCategory('all');
};