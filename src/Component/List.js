import "./List.css";
import { useState } from "react";

const List = () => {
  //----------------------------------Take the input value and add it to the list with the previous tasks ----------------------------------------------------//
  const [Listinput, setListItem] = useState("");
  const TakeValue = (event) => {
    setListItem(event.target.value);
  };

  const [AddToList, setListAddnew] = useState([]);
  const AddTasks = () => {
    setListAddnew((prev) => {
      return [...prev, Listinput];
    });
    setListItem("");
  };
  //-------------------------------------when pressing Enter Key--> Add to the List ------------------------------------------------//
  const EnterKey = (event) => {
    if (event.key === "Enter") {
      AddTasks();
    }
  };
  //-------------------------------------Delete The List and the Input field-------------------------------------------------------//
  const DeleteTasks = () => {
    setListAddnew([]);
    setListItem("");
  };
  //-------------------------------------Delete The checked Items-----------------------------------------------------------------//

  const testchecked = (event, index) => {
    if (event.target.checked) {
      setListAddnew(
        (AddToList) => AddToList.filter((element, i) => i !== index) //-----If i !== the index of the element --> add to the array------//
      );
      event.target.checked = false;
    }
  };

  return (
    <div>
      <div className="ListBoxStyle">
        <input
          className="input"
          type="text"
          placeholder="Enter New Task"
          value={Listinput}
          onChange={TakeValue}
          onKeyDown={EnterKey}
        />
        <button className="addButton" onClick={AddTasks}>
          ADD
        </button>

        {AddToList.map((tasks, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                onChange={(event) => testchecked(event, index)}
                value={tasks}
              />
              <span>{tasks}</span>
            </div>
          );
        })}
      </div>
      <button className="DeleteButton " onClick={DeleteTasks}>
        Delete Your Tasks
      </button>
    </div>
  );
};

export default List;
