document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

function saveNote() {
    let noteInput = document.getElementById("note-input");
    let noteText = noteInput.value.trim();
    if (noteText) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteInput.value = "";
        loadNotes();
    }
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${note} <button onclick="deleteNote(${index})">Delete</button>`;
        notesList.appendChild(li);
    });
}