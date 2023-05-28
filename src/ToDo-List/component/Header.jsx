import React, {useState} from "react";
import Buttons, { SelectButton } from "./Buttons";
import styles from '../styles/modules/app.module.scss'
import Modal from "./Modal";

export function Header(){
    const [ModalOpen, setModalOpen] = useState(false);

    const AddHandler = () => {
        setModalOpen(true);
    }
    return (
        <div className={styles.appHeader}>
            <Buttons type="button" variants="primary" onClick={AddHandler}
            >Add Task</Buttons>
            <SelectButton id='status'>
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </SelectButton>
            <Modal type='add' ModalOpen={ModalOpen} setModalOpen={setModalOpen}/>
        </div>
    )
}

export default Header;