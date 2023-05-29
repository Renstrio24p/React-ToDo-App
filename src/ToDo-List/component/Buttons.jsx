import React from "react";
import styles from '../styles/modules/button.module.scss'
import { getClasses } from "../../utilities/getClass";

const BtnTypes = {
    primary : 'primary',
    secondary : 'secondary',
    danger : 'danger',
}

export default function Buttons({children , type, variants, ...therest}){
    return (
        <button className={getClasses([
            styles.button,styles[`button--${BtnTypes[variants]}`
            ]])} type={type === 'submit' ? 'submit' : 'button'}
            {...therest}
            >
            {children}
        </button>
    )
}

export function SelectButton ({children, ...therest}){
    return (
        <select className={getClasses([styles.button,styles.button__select])}
        {...therest}
        >{children}</select>
    )
}