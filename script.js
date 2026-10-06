const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const errorMessage = document.querySelector("#error-message");
const noteCount = document.querySelector("#note-count");
const notesList = document.querySelector("#notes-list");
const searchInput = document.querySelector("#search-input");
const clearAllButton = document.querySelector("#clear-all");

let notes = [];

function saveNotes() {
  localStorage.setItem("quicknotes", JSON.stringify(notes));
}

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = "You have " + notes.length + " notes.";
  }
}

function render() {
  notesList.textContent = "";
  updateCount();

  const searchWords = searchInput.value.trim().toLowerCase();
  const visibleNotes = notes.filter(function (note) {
    return note.text.toLowerCase().includes(searchWords);
  });

  if (searchWords !== "" && visibleNotes.length === 0) {
    const message = document.createElement("li");
    message.textContent = "No notes match your search.";
    notesList.appendChild(message);
    return;
  }

  visibleNotes.forEach(function (note) {
    const li = document.createElement("li");
    li.className = "note-card category-" + note.category.toLowerCase();

    const category = document.createElement("span");
    category.className = "note-category";
    category.textContent = note.category;

    const text = document.createElement("p");
    text.textContent = note.text;

    const date = document.createElement("small");
    date.className = "note-date";
    date.textContent = note.createdAt;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      notes = notes.filter(function (item) {
        return item.id !== note.id;
      });
      saveNotes();
      render();
    });

    li.append(category, text, date, deleteButton);
    notesList.appendChild(li);
  });
}

noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteInput.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }

  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  const note = {
    id: Date.now(),
    text: text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  saveNotes();
  errorMessage.textContent = "";
  noteInput.value = "";
  render();
});

searchInput.addEventListener("input", render);

clearAllButton.addEventListener("click", function () {
  if (notes.length > 0 && confirm("Delete all notes?")) {
    notes = [];
    saveNotes();
    render();
  }
});

const savedNotes = localStorage.getItem("quicknotes");
if (savedNotes) {
  notes = JSON.parse(savedNotes);
}

render();
