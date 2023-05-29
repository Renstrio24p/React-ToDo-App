import React from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../../utilities/getClass";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../slicers/Slicer";
import { toast } from "react-hot-toast";
import Modal from "./Modal";

export default function Item({ todo }) {
  const dispatcher = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);
  const DeleteHandler = () => {
    dispatcher(deleteTodo(todo.id));
    toast.success("Task Deleted Successfully.");
  };
  const UpdateHandler = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.todoDetails}>
            []
          <p className={styles.todoText}>{todo.Title}</p>
          </div>
        <div className={styles.todoActions}>
            <div className={styles.icon} onClick={DeleteHandler} onKeyDown={DeleteHandler} tabIndex={0}>
                  <i className="fa-solid fa-trash"></i>
            </div>
            <div className={styles.icon} onClick={UpdateHandler} onKeyDown={UpdateHandler} tabIndex={0}>
                  <i className="fa-solid fa-pen-to-square"></i>
            </div>
        </div>


        </div>

        <div className={styles.todoDescription}>
          <div className={getClasses([styles.item,styles.textArea])}>
              <p className={getClasses([styles.texts,styles.time])}> {`${todo.Description}`} </p>
          </div>
        </div>

        <div className={styles.timestamps}>
          <div className={styles.todoActions}>
            <p className={styles.time}>{todo.time}</p>
            <p className={styles.time}>{todo.day} - Status : {todo.Status}</p>
          </div>
          <p className={getClasses([styles.time,styles.text])}>Assign to : {todo.Assign}</p>
        </div>
      </div>

      <Modal type="update" todo={todo} ModalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen}/>
    </>
  );
}
