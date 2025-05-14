# Flashcard Quiz App

A simple, interactive flashcard quiz app for learning JavaScript, HTML5, and CSS3 concepts. Users can test their knowledge, add/edit/delete flashcards, filter by category, track their score, and switch between Dark Mode and Light Mode for comfortable studying at any time.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Deployed App](#deployed-app)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [JavaScript Methodologies Used](#javascript-methodologies-used)
- [Toggle Feature (Dark Mode / Light Mode)](#toggle-feature-dark-mode--light-mode)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Multiple-choice flashcards for JavaScript, HTML5, and CSS3
- Add, edit, and delete flashcards
- Category filtering and card shuffling
- Score tracking with reset option
- Responsive and modern UI
- Data persistence with localStorage
- **Dark Mode / Light Mode toggle for comfortable viewing**

---

## Demo

![Flashcard Quiz App Demo](./demo.gif)

---

## Deployed App

You can try the Flashcard Quiz App live here:  
[https://sandhya80.github.io/flashcard-quiz-app/](https://sandhya80.github.io/flashcard-quiz-app/)

---

## File Structure

```plaintext
flashcard-quiz-app/
├── [index.html](http://_vscodecontentref_/0)      # Main HTML file
├── [style.css](http://_vscodecontentref_/1)       # App styling
├── [script.js](http://_vscodecontentref_/2)       # App logic and interactivity
├── [favicon.ico](http://_vscodecontentref_/3)     # App icon 
└── [README.md](http://_vscodecontentref_/4)
```

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/flashcard-quiz-app.git
   cd flashcard-quiz-app
   ```

2. **Open `index.html` in your browser.**

_No build steps or dependencies required._

---

## Usage

- **Answer Questions:** Click on the correct answer from the multiple choices.
- **Flip Card:** View the answer using the "Flip" button.
- **Navigate:** Use "Next" and "Previous" to move between cards.
- **Add/Edit/Delete:** Use the provided forms and buttons to manage flashcards.
- **Filter:** Select a category to focus on specific topics.
- **Shuffle:** Randomise the order of flashcards.
- **Score:** Track your score and reset it anytime.

---

## Customization

- **Add More Flashcards:** Edit `script.js` and add more questions/answers to the flashcards array.
- **Change Styles:** Modify `style.css` for custom colours and layout.
- **Expand Categories:** Add new categories and update the category dropdown in `index.html`.

---

## JavaScript Methodologies Used

The Flashcard Quiz App leverages modern JavaScript methodologies and best practices to ensure a robust, maintainable, and interactive user experience:

- **Modular Code Structure:**  
  Functions are organized by responsibility (rendering, event handling, data management) for clarity and maintainability.

- **DOM Manipulation:**  
  The app dynamically updates the DOM to display questions, choices, scores, and feedback using methods like `document.getElementById`, `createElement`, and event listeners.

- **Event-Driven Programming:**  
  User interactions (button clicks, form submissions, category changes) are handled using event listeners to provide real-time feedback and interactivity.

- **State Management:**  
  The app maintains state variables (such as current question, score, filtered cards, and selected category) to track user progress and update the UI accordingly.

- **Local Storage:**  
  User data (flashcards and score) is persisted using `localStorage`, allowing users to retain their progress and custom cards across sessions.

- **Array Methods:**  
  Modern array methods like `.filter()`, `.map()`, `.forEach()`, and `.sort()` are used for efficient data manipulation (e.g., filtering by category, shuffling cards, generating choices).

- **Form Handling and Validation:**  
  Input forms for adding and editing flashcards include validation to ensure data integrity before updating the flashcard set.

- **Responsive Feedback:**  
  The UI provides immediate feedback for correct/incorrect answers, quiz completion, and score updates.

- **Progressive Enhancement:**  
  The app is designed to work seamlessly on all modern browsers and devices, with graceful fallbacks for unsupported features.

---

## Toggle Feature (Dark Mode / Light Mode)

The Flashcard Quiz App includes a convenient Dark Mode/Light Mode toggle. Users can switch between dark and light themes at any time using the toggle button at the top of the app. The app remembers your preference for future visits, providing a comfortable experience whether you're studying during the day or at night.

---

### Demo of Toggle Feature

You can see the Dark Mode/Light Mode toggle in action below:

<!-- Need to replace the link below with a GIF or video demonstrating the toggle feature -->
![Dark Mode Toggle Demo](togglebtn.gif)

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

---

## License

MIT License

---

Customise it your way and enjoy learning with your Flashcard Quiz App!
