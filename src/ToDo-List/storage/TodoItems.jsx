import React from "react";
import styles from "../component/styles/modules/todoItem.module.scss";
import { getClasses } from "../component/utilities/getClass";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../DataSlicers/todoslicer";
import { toast } from "react-hot-toast";
import Modals from "../component/Modals";

export default function TodoItems({ todo }) {
  const dispatcher = useDispatch();
  const [UpdateModalOn,setUpdateModalOn] = React.useState(false)
  function DeleteHandler() {
    dispatcher(deleteTodo(todo.id));
    toast.success("Task Deleted Successfully");
  }
  function UpdateHandler() {
    setUpdateModalOn(true);
}
return (
  <div>
    <div className={styles["container-Todo"]}>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          []
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.Status === "Complete" && styles["todoText--completed"],
                todo.Status === "To be follow" &&
                  styles["todoText--tobefollow"],
                todo.Status === "Incomplete" &&
                  styles["todoText--incomplete"],
              ])}
            >
              {todo.Title}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={DeleteHandler}
            onKeyDown={DeleteHandler}
            role="button"
            tabIndex={0}
          >
            <i className="fa-solid fa-trash"></i>
          </div>
          <div
            className={styles.icon}
            onClick={UpdateHandler}
            onKeyDown={UpdateHandler}
            role="button"
            tabIndex={0}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
      </div>
      <div className={getClasses([styles.description, styles.time])}>
        <div className={styles.item}>
          <p>{`${todo.Description}`}</p>
        </div>
      </div>
      <div className={getClasses([styles.timestamps, "TimeStamps"])}>
        <p className={styles.time}>
          {todo.time} - {todo.day} [{todo.Status}]
        </p>
        <p className={styles.time}>Assigned to : {todo.Assign}</p>
      </div>
    </div>
    <Modals 
        Type={'Update'}
        todo={todo}
        ModalOpen={UpdateModalOn}
        setModalOpen={setUpdateModalOn}
    />
  </div>
);
}
