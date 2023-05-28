import React from "react";
import styles from "../styles/modules/modal.module.scss";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slicers/Slicer";
import {v4 as uuid} from 'uuid';
import { toast } from "react-hot-toast";


function Modal({ type, ModalOpen, setModalOpen , todo }) {
    const [Title, setTitle] = React.useState('')
    const [Status, setStatus] = React.useState('Incomplete')

    const FunctionHandler = () =>{
        ModalOpen = setModalOpen(false);
    }

    const dispatcher = useDispatch();

    React.useEffect(()=>{
        if(type === 'update' && todo){
            setTitle(todo.Title);
            setStatus(todo.Status);
        }
    },[type,todo, ModalOpen])

    const Submitter = (e) => {
        e.preventDefault();
        if(Title === ''){
            toast.error('title must not be empty.')
            return;
        }
        
            if(Title && Status){

                if(type === 'add'){
                    dispatcher(addTodo({
                       id: uuid(),
                       Title,
                       Status,
                       time : new Date().toLocaleString(),
                    }),
                    toast.success('Task Added Successful.'),
                    setModalOpen(false)
                    )
                }

                if(type === 'update'){
                    if(todo.Title !== Title || todo.Status !== Status){
                        dispatcher(updateTodo({
                            ...todo,
                            Title,
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
              <label htmlFor="status">
                Status
                <select name="status" id="status" value={Status}
                onChange={(e)=> { setStatus(e.target.value)}}>
                  <option value="incomplete">Incomplete</option>
                  <option value="Complete">Complete</option>
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

export default Modal;
