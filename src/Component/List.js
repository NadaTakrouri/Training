import './List.css';
import { useState } from 'react';


const List = () => {


//----------------------------------Take the input value and add it to the list with the previous tasks ----------------------------------------------------//
    const [Listinput, setListItem] = useState('');
    const TakeValue = (event)=> {
        setListItem(event.target.value);
    } 

    const [AddToList, setListAddnew] = useState([]);
    const AddTasks = () => {
        setListAddnew  ((prev) => {
            return [...prev, Listinput];
           });
           setListItem("");
        
    }
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
    }


 return (
<div>
    <div className='ListBoxStyle'>
        <input className='input' type="text" placeholder="Enter New Task" value={Listinput} onChange={TakeValue} onKeyDown={EnterKey}/>
        <button className='addButton' onClick={AddTasks}>ADD</button>
       
            {
            AddToList.map( (tasks) => {

                return (
                <div>
                    <input key={Math.random()*10} type="checkbox"/>
                    <span>{tasks}</span>
               </div>
                )
            })
        }
  
    </div>
     <button className='DeleteButton ' onClick={DeleteTasks}> Delete Your Tasks</button>
 
     </div>
    );

}

export default List ;


