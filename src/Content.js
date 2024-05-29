import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircleOutline } from "react-icons/io";

const Content = () => {
    const initialItems = JSON.parse(localStorage.getItem("todo_list")) || [
        { id: 1, checked: true, item: "React learning" },
        { id: 2, checked: false, item: "workout" },
        { id: 3, checked: false, item: "English speaking" }
    ];

    const [items, setItems] = useState(initialItems);
    const [search, setSearch] = useState('');

    useEffect(() => {
        localStorage.setItem("todo_list", JSON.stringify(items));
    }, [items]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => 
            item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    };

    const createElement = () => {
        const inp = prompt("Enter new item:");
        if (inp) {
            const add = { 
                id: items.length ? items[items.length - 1].id + 1 : 1,
                checked: false, 
                item: inp 
            };
            const listItems = [...items, add];
            setItems(listItems);
        }
    };

    const filteredItems = items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()));

    return (
        <main>
            <ul>
                <IoMdAddCircleOutline 
                    role='button' 
                    onClick={createElement}
                    tabIndex="0"
                    color='white'
                    fontSize='50px'
                    style={{ marginLeft: '2em' }}
                />
            </ul>
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    id="search" 
                    type="text" 
                    placeholder="Search items" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            {filteredItems.length ? (
                <ul><li></li>
                    {filteredItems.map((item) => (
                        <li className='item' key={item.id}>
                            <input 
                                type="checkbox" 
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={item.checked ? { textDecoration: "line-through" } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt 
                                role='button' 
                                onClick={() => handleDelete(item.id)}
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: "white", fontSize: "50px", fontFamily: "fantasy" }}>No List!</p>
            )}
        </main>
    );
}

export default Content;
