import React from "react";
import { useSelector } from "react-redux";
import TodoItems from "../storage/TodoItems";

export default function Content(){

    const todoList = useSelector((state) => state.todo.todoList)

    const Sortedlist = [...todoList]
    Sortedlist.sort((a,b) => new Date(b.time) - new Date(a.time))
    return (
        <div>
           {Sortedlist && Sortedlist.length > 0 ? Sortedlist.map((todo) => 
           <TodoItems key={todo.id} todo={todo} />
           ):
           'no todo list here'
        } 
        </div>
    )
}