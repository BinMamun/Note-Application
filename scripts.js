const createNew = document.querySelector(".js-create-new-button");
const noteContainer = document.querySelector(".notes-container");
const deleteNote = document.querySelectorAll(".js-delete-icon");

showNotes(); // shows the previous notes saved before.

createNew.addEventListener("click", () => {

  let div = document.createElement("div");
  div.className = "note";

  let titleBox = document.createElement("h5");
  titleBox.setAttribute("contenteditable", "true");

  let img = document.createElement("img");
  img.src = "./images/delete.png";
  img.className = "delete-note-icon";

  let p = document.createElement("p");
  p.className = "input-box";
  p.setAttribute("contenteditable", "true");

  div.appendChild(titleBox);
  div.appendChild(img);
  div.appendChild(p);
  noteContainer.appendChild(div);
  saveNotes();
});


noteContainer.addEventListener("click", (element) => {
  if (element.target.tagName === "IMG") {
    element.target.parentElement.remove();
    saveNotes();
  }
  else if (element.target.tagName === "P") {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.addEventListener("keyup", () => {
        saveNotes();
      })
    })
  }
})


function saveNotes() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}// save to local storage function

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
} // show from local storage function
