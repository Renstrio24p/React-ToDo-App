import React from "react";
import Page from "./ToDo-List/component/Page";
import styles from "./ToDo-List/styles/modules/app.module.scss";
import Header from "./ToDo-List/component/Header";
import { Toaster } from "react-hot-toast";
import Content from "./ToDo-List/component/Content";

export default function Start() {
  return (
    <div className={styles.container}>
      <Page>Todo</Page>
      <div className={styles.app__wrapper}>
        <Header />
        <Content />
      </div>
      <Toaster
        position="bottom-left"
        toastOptions={{ style: { fontSize: "1.4rem" } }}
      />
    </div>
  );
}
