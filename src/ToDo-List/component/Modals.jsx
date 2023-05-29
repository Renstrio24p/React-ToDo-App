import React from "react";
import styles from "./styles/modules/modal.module.scss";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../DataSlicers/todoslicer";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";

export default function Modals({ Type, ModalOpen, setModalOpen, todo}) {
  const [Title, setTitle] = React.useState("");
  const [Assign, setAssign] = React.useState("");
  const [Status, setStatus] = React.useState("Incomplete");
  const [Description, setDescription] = React.useState([]);


  React.useEffect(()=>{
    if(Type === 'Update' && todo){
        setTitle(todo.Title);
        setAssign(todo.Assign);
        setDescription(todo.Description);
        setStatus(todo.Status);
    }
  },[Type,todo, ModalOpen])


  // Constant Functions for each field
  const TitleStats = (e) => {
    setTitle(e.target.value);
  };

  const Assigned = (e) => {
    setAssign(e.target.value);
  };

  const Stats = (e) => {
    setStatus(e.target.value);
  };

  const FuncDesc = (e) => {
    setDescription(e.target.value);
  };

  const Dispatcher = useDispatch();
  const SubmitHandler = (e) => {
    e.preventDefault();
    const options = {
      weekday: "long",
    };

    if (Title === "") {
      toast.error("Please Enter the Title for this Task.");
      return;
    }
    if (Title && Assign && Description && Status) {
      if (Type === "Add") {
        Dispatcher(
          addTodo({
            id: uuid(),
            Title,
            Assign,
            Status,
            Description,
            time: new Date().toLocaleString(),
            day: new Date().toLocaleString("en-us", options),
          })
        );
        setModalOpen(false);
        toast.success('Task Added..')
      }

      if (Type === "Update") {
        if (todo.Title !== Title || todo.Assign !== Assign || todo.Description !== Description || todo.Status !== Status) {
          Dispatcher(
            updateTodo({
              ...todo,
              Title,
              Assign,
              Status,
              Description,
            })
            );
            toast.error('No Changes Made.')
        }

       
      }
    } else if (Title && Assign && !Description && Status) {
      toast.error("Description must not be empty.");
    } else if (Title && !Assign && Description && Status) {
      toast.error("Must Assign this task to whom.");
    } else {
      toast.error("Title must not be empty.");
    }
  };

  return (
    <div>
      {ModalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={`fa-solid fa-xmark ${styles.closeButton}`}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
            ></div>
            <form className={styles.form} onSubmit={SubmitHandler}>
              <h1 className={styles.formTitle}>
                {Type === "Update" ? "Update" : "Add"} Task
              </h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={Title}
                  onChange={TitleStats}
                />
              </label>
              <label htmlFor="assign">
                Assign to
                <input
                  type="text"
                  id="assign"
                  value={Assign}
                  onChange={Assigned}
                />
              </label>
              <label htmlFor="description">
                Description
                <textarea
                  className={styles.textarea}
                  id="decription"
                  rows={4}
                  value={Description}
                  onChange={FuncDesc}
                ></textarea>
              </label>
              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id="status"
                  value={Status}
                  onChange={Stats}
                >
                  <option value="Incomplete">Incomplete</option>
                  <option value="Complete">Complete</option>
                  <option value="inprogress">In Progress</option>
                  <option value="To be follow">To be follow</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Buttons type="submit" variants="primary">
                  {Type === "Update" ? "Update" : "Add"} task
                </Buttons>
                <Buttons
                  type="button"
                  variants="secondary"
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}
                >
                  Cancel
                </Buttons>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
