import React from "react";
import styles from "../styles/modules/modal.module.scss";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slicers/Slicer";
import {v4 as uuid} from 'uuid';
import { toast } from "react-hot-toast";


export default function Modal({ type, ModalOpen, setModalOpen , todo }) {
    const [Title, setTitle] = React.useState('')
    const [Status, setStatus] = React.useState('Incomplete')
    const [Assign, setAssign] = React.useState('')
    const [Description, setDescription] = React.useState([])

    const FunctionHandler = () =>{
        ModalOpen = setModalOpen(false);
    }
    const dispatcher = useDispatch();
    React.useEffect(()=>{
        if(type === 'update' && todo){
            setTitle(todo.Title);
            setAssign(todo.Assign);
            setDescription(todo.Description);
            setStatus(todo.Status);
        }
    },[type,todo, ModalOpen])

    const Submitter = (e) => {
        e.preventDefault();
        if(Title === ''){
            toast.error('title must not be empty.')
            return;
        }
            if(Title && Assign && Description && Status){
                if(type === 'add'){
                    dispatcher(addTodo({
                       id: uuid(),
                       Title,
                       Assign,
                       Description,
                       Status,
                       time : new Date().toLocaleString(),
                    }),
                    toast.success('Task Added Successful.'),
                    setModalOpen(false)
                    )
                }
                if(type === 'update'){
                    if(todo.Title !== Title || todo.Assign !== Assign || todo.Description !== Description || todo.Status !== Status){
                        dispatcher(updateTodo({
                            ...todo,
                            Title,
                            Assign,
                            Description,
                            Status,
                        }))
                    } else {
                        toast.error('no changes made');
                    }
                }
            } else {
                toast.error('title must not empty.')
            }
    }
  return (
    <> 
        {ModalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={`fa-solid fa-xmark ${styles.closeButton}`}
            onClick={FunctionHandler}
            onKeyDown={FunctionHandler}
            tabIndex={0}
            ></div>
            <form className={styles.form} onSubmit={Submitter}>
              <h1 className={styles.formTitle}>{type === 'update' ? 'Update' : 'Add'} TASK</h1>
              <label htmlFor="title">
                Title
                <input type="text" id="title" name="title" value={Title}
                onChange={(e)=> { setTitle(e.target.value)}} />
              </label>
              <label htmlFor="assign">
                Assign to
                <input type="text" id="assign" name="assign" value={Assign}
                onChange={(e)=> { setAssign(e.target.value)}} />
              </label>
              <label htmlFor="description">
                Description
                <textarea name="description" id="description" cols="1" rows="4"
                value={Description}
                onChange={(e) => {setDescription(e.target.value)}}
                ></textarea>
              </label>
              <label htmlFor="status">
                Status
                <select name="status" id="status" value={Status}
                onChange={(e)=> { setStatus(e.target.value)}}>
                  <option value="incomplete">Incomplete</option>
                  <option value="completse">Complete</option>
                  <option value="work in progress">Work in Progress</option>
                  <option value="to be follow">To be follow</option>
                </select>
              </label>

              <div className={styles.buttonContainer}>
                <Buttons type="submit" variants="primary">
                {type === 'update' ? 'Update' : 'Add'} Task
                </Buttons>
                <Buttons type="button" variants="secondary" 
                onClick={FunctionHandler}
                onKeyDown={FunctionHandler}>
                  Cancel
                </Buttons>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}