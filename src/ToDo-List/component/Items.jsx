import React from "react";
import styles from '../styles/modules/todoitem.module.scss'
import { getClasses } from "../../utilities/getClass";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../slicers/Slicer";
import { toast } from "react-hot-toast";
import Modal from "./Modal";

export default function Item({todo}){
    const dispatcher = useDispatch();
    const [updateModalOpen,setUpdateModalOpen] = React.useState(false);
    const DeleteHandler = () => {
        dispatcher(deleteTodo(todo.id));
        toast.success('Task Deleted Successfully.')
    }
    const UpdateHandler = () => {
        setUpdateModalOpen(true);
    }

    return (

        <>

        <div className={styles.item}>
            <div className={styles.todoDetails}>
                    []
                <div className={styles.text}>
                    <p className={getClasses([
                        styles.todoText,
                        todo.status === 'complete' && styles['todoText--complete'],
                    ])}>{todo.Title}</p>
                    <p className={styles.time}>{todo.time}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div className={styles.icon}
                    onClick={DeleteHandler}
                    onKeyDown={DeleteHandler}
                    role="button"
                    tabIndex={0}
                >
                    <i className="fa-solid fa-trash"></i>
                </div>
                <div className={styles.icon}
                    onClick={UpdateHandler}
                    onKeyDown={UpdateHandler}
                    role="button"
                    tabIndex={0}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </div>
            </div>
        </div>

        <Modal 
        type="update"
        todo={todo}
         ModalOpen={updateModalOpen} 
         setModalOpen={setUpdateModalOpen} />
        </>
    )
}