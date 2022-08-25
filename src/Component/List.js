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
  const [checked, setChecked] = useState([]);

  const testchecked = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      //--remove the checked item from the array  --//
      updatedList.splice(checked.indexOf(event.target.value), 1); //---- If we remove (1) and then we cross out the required items and the items after it--> and then we unchecked this item --> it will unchecked the itmes after it
    }
    setChecked(updatedList);
  };
  //------ If the item exist in checked list then we cross out it.... else we not--------------------------------------------------//
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

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
              <input type="checkbox" onChange={testchecked} value={tasks} />
              <span className={isChecked(tasks)}>{tasks}</span>
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
