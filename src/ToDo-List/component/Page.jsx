import React from "react";
import style from './styles/modules/title.module.scss'

export default function TodoPage({children, ...rest}){
    return (
        <div>
            <p className={style.title} {...rest}>{children}</p>
        </div>
    )
}