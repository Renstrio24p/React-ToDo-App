import React, { Children } from "react";
import styles from './styles/modules/button.module.scss'
import { getClasses } from "./utilities/getClass";
import './styles.css'

const Btntypes = {
    primary : 'primary',
    secondary: 'secondary',
    danger: 'danger'
}

export default function Buttons({children,type, variants,...rest}){
    return (
        <button className={getClasses([
            styles.button,
             styles[`button--${Btntypes[variants]}`],'Headers'
             ])} type={type === 'submit'? 'submit' : 'button'}
             {...rest}
             >
            {children}
        </button>
    )
}

export function SelectButton ({children,...rest}){
    return (
        <select className={getClasses([
            styles.button,styles.button__select,'Headers'])}
            {...rest}
            >{children}</select>
    )
}