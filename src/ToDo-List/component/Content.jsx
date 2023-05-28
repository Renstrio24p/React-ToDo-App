import React from "react";
import { useSelector } from "react-redux";
import Item from "./Items";

export default function Content(){
    const todoList = useSelector((state) => state.todo.todoList);

    const SortedTodoList = [...todoList];
    SortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time));
    return (
        <div>
            {SortedTodoList && SortedTodoList.length > 0 ?
             SortedTodoList.map((todo) => <Item key={todo.id} todo={todo} />) :
             'no data'
            }
        </div>
    )
}