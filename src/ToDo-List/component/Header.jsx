import React from "react";
import Buttons, { SelectButton } from "./Buttons";
import styles from './styles/modules/app.module.scss'
import Modals from "./Modals";
import { toast } from "react-hot-toast";
import { getClasses } from "./utilities/getClass";

export default function Header(){

    const [ModalOpen, setModalOpen] = React.useState(false) 

    return (
        <div className={getClasses([styles.Header,'Headers'])}>
            <div className={getClasses([styles.side,'Headers'])}>

            <Buttons type='submit' variants='primary'
            onClick={() => setModalOpen(true)}
            > <i className="fa-solid fa-pen"></i> Add Task</Buttons>
            <Buttons type='submit' variants='danger'
            onClick={() => {window.localStorage.clear(),
                toast.success("Local Database Cleared..")}
            }
            ><i className="fa-solid fa-broom"></i> Delete Storage</Buttons>
           
            </div>
            <div className="Headers">
            <SelectButton id="status">
                <option value="all">All</option>
                <option value="tbfollow">To be follow</option>
                <option value="inc">Incomplete</option>
                <option value="complete"> Complete</option>
                <option value="inprog">In Progress</option>
            </SelectButton>
            <Modals Type='Add' ModalOpen={ModalOpen} setModalOpen=
            {setModalOpen} />
            </div>
        </div>
    )
}