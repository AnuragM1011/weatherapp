import React, { useEffect, useState } from 'react';
// import ToDo from "../../../public/images/todo.svg"
import './style.css';

// get the local data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
        return JSON.parse(lists);  /*array format data*/
    }
    else {
        return [];
    }
};

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    // add the items functions

    const addItem = () => {
        if (!inputdata) {
            alert("please fill the data")
        }
        else if (inputdata && toggleButton) {
            setItems(items.map((curElem) => {
                if (curElem.id === isEditItem) {
                    return { ...curElem, name: inputdata };
                }
                return curElem;

            })
            );
            setInputData("");
            setIsEditItem(null);
            setToggleButton(false);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItems([...items, myNewInputData]);
            setInputData("");

        }
    };
    // edit item from the section
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        });
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    };

    // how to delete items section
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });

        setItems(updatedItems);
    }
    // remove all the items in the list
    const removeAll = () => {
        setItems([]);

    };
    // adding localStorage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items]);  /*when items work then our useEffect work*/




    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" ></img>
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder=" ✍ Add Item...."
                            className="form-control"
                            value={inputdata}
                            onChange={(event) => setInputData(event.target.value)} />

                        {toggleButton ? (<i className="fa-regular fa-edit fa-pen-to-square add-btn"
                            onClick={addItem}></i>
                        ) : (<i className="fa fa-plus add-btn" onClick={addItem}></i>
                        )}

                        {/* <i className="fa fa-plus add-btn" onClick={addItem}></i> */}
                    </div>

                    {/* show our items */}

                    <div className="showItems">
                        {items.map((curElem) => {
                            return (
                                <>
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">

                                            <i className="fa-regular fa-edit fa-pen-to-square add-btn " onClick={() => editItem(curElem.id)}></i>
                                            <i className="fa-solid fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)} ></i>
                                        </div>

                                    </div>
                                </>
                            )
                        })}

                    </div>

                    {/* remove allbuttons */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo