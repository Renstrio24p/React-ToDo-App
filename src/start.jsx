import React from "react";
import TodoPage from "./ToDo-List/component/Page";
import Header from "./ToDo-List/component/Header";
import style from "./ToDo-List/component/styles/modules/app.module.scss";
import Content from "./ToDo-List/component/Content";
import { Toaster } from "react-hot-toast";

export default function Start() {
  return (
    <>
      <div className="container">
        <TodoPage>
          To Do <i className="fa-solid fa-list"></i>
        </TodoPage>
        <div className={style.app__wrapper}>
          <Header />
          <Content></Content>
        </div>
      </div>
          <Toaster
            position="bottom-left"
            toastOptions={{
            style:{
                fontSize: '1.4rem',
            }
          }}/>
    </>
  );
}

// this is the same as App.js in CRA
