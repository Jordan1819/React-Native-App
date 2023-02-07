const textHandler = (e) => {
    setInputText(e.target.value);
  };

const saveHandler = () => {
setNotes((prevState) => [
    ...prevState,
    {
    id: uuid(),
    text: inputText,
    },
]);
//clear the textarea
setInputText("");
};

const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  
import { v4 as uuid } from "uuid";