import './List.css';
import { useState } from 'react';

const List = () => {

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

    const DeleteTasks = () => {
        setListAddnew([]);
        setListItem("");
    }

 return (
<div>
    <div className='ListBoxStyle'>
        <input type="text" placeholder="Enter New Task" value={Listinput} onChange={TakeValue} />
        <button className='ButtonStyle' onClick={AddTasks}>ADD</button>
        <ol>
            {
            AddToList.map( (tasks) => {
               return <li> {tasks}</li>;
            })
        }
        </ol>
    </div>
     <button className='DeleteButton ' onClick={DeleteTasks}> Delete Your Tasks</button>
 
     </div>
    );

}

export default List ;


