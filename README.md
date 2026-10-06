# QuickNotes

QuickNotes is a simple note-taking web app built with HTML, CSS and JavaScript. It allows users to create notes, choose a category, search existing notes, delete individual notes and keep their notes after refreshing the page using localStorage.

## Features

- Add a note with a Personal, Work or Study category
- Validate empty notes and notes longer than 200 characters
- Display notes with their category and creation date
- Delete individual notes
- Search notes without case sensitivity
- Save notes in localStorage so they survive page refreshes
- Show the correct note count for zero, one and many notes
- Clear all notes with a confirmation message
- Responsive layout for small screens

## How to run locally

1. Clone or download this repository.
2. Open the `quicknotes-app` folder in VS Code.
3. Open `index.html` in a web browser, or use the Live Server extension in VS Code.
4. Add, search and delete notes to test the application.

## What I learned

- I learned how to structure a webpage using semantic HTML elements such as `header`, `main`, `section` and `footer`.
- I learned how to use JavaScript arrays of objects and functions to manage application data.
- I learned how to use `localStorage`, `JSON.stringify()` and `JSON.parse()` to save data in the browser.
- I learned how to use `createElement()` and `textContent` to safely create note cards with JavaScript.
- I learned how CSS Flexbox and media queries can make a webpage responsive.

## Files

- `index.html` - page structure
- `style.css` - styling and responsive layout
- `script.js` - note functionality
- `README.md` - project documentation
