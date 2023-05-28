import React from "react";
import styles from '../styles/modules/title.module.scss'

export default function Page({children}){
    return (
        <div>
            <p className={styles.title}>{children}</p>
            {/* This is the children handler for Page*/}
        </div>
    )
}