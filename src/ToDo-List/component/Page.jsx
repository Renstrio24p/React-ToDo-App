import React from "react";
import styles from '../styles/modules/title.module.scss'

export default function Page({children, ...therest}){
    return (
            <p className={styles.title}{...therest}>{children}  <i className="fa-solid fa-list"></i></p>
    )
}
