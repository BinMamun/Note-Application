const createNew = document.querySelector(".js-create-new-button");
const noteContainer = document.querySelector(".notes-container");

showNotes(); // shows the previous notes saved before.

let newNote = localStorage.getItem("notes") || "";
let id = 0;
createNew.addEventListener("click", () => {
  newNote += `
  <div class="note" id="${id++}">
    <input contenteditable="true" placeholder="Title">
    <img title="Delete note" class="delete-note-icon" src="./images/delete.png" alt="">
    <p contenteditable="true" class="input-box">
    </p>        
  </div>`;
  noteContainer.innerHTML = newNote;
  saveNotes();
})


function saveNotes() {
  localStorage.setItem("notes", newNote);
}

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
