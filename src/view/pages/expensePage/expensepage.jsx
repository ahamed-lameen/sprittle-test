import { useState } from 'react';
import './style.css'
import Button from '../../component/button/button';
import TextField from '../../component/textField/textField';

function ExpensePage(props) {
    const[add, setAdd] = useState("");
    const [labelError, setLabelError] = useState("");
    const[labelAdd, setLabelAdd] = useState("Add");
    const[labelRemove, setLabelRemove] = useState("Remove");
    const[addupdate, setAddUpdate] = useState([]);
    const[update, setUpdate] = useState("");

    const addExpense = () => {
        if(add === "" || add == 0) {
            setLabelError("please enter the value above 0")
        }
        else {
            setUpdate(Number(add) + Number(update));
            setAdd("");
            let time = new Date().toLocaleString()
            setAddUpdate([...addupdate,{add, labelAdd, update, time}]);
            setLabelError("");
        }
    }

    const removeExpense = () => {
        if(add === "" || add == 0) {
            setLabelError("please enter the value above 0")
        }
        else {
            setUpdate(update - add);
            let time = new Date().toLocaleString()
            setAddUpdate([...addupdate,{add, labelRemove, update, time}]);
            console.log("rem",update);
            setAdd("");
            setLabelError("");
        }
    }

    return ( 
        <>  
            <h1>Expense Tracker - Basic</h1>
            <div className='box'>
                <h2>Balance:{update}</h2>
                <TextField type="number" size="33" handleChange={event => setAdd(event.target.value)} initialValue={add}/>
                <p className="field-error">{labelError}</p>
                <div className='row'>
                    <div className='cell-1 add-button-box'>
                    <Button isPrimary={true}  label="ADD" handleClick={() => addExpense()}  />
                    </div>
                    <div className='cell-1 remove-button-box'>
                    <Button isPrimary={true}  label="REMOVE" handleClick={() => removeExpense()}/>
                    </div>
                </div>
            </div>
            <div className='box'>
                <h2>Transactions:</h2>
                    {addupdate.map((value) => (
                            <>
                            <div>{value.time} - {value.labelAdd} {value.labelRemove}- {value.add}</div>
                            </>
                    ))} 
            </div>
        </>
    );
}

export default ExpensePage;