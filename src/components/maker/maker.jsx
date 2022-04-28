import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "kakao",
      theme: "dark",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      filename: "ellie",
      fileURL: null,
    },
    {
      id: "2",
      name: "Ellie",
      company: "kakao",
      theme: "light",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      filename: "ellie",
      fileURL: "ellie.png",
    },
    {
      id: "3",
      name: "Ellie",
      company: "kakao",
      theme: "colorful",
      title: "Software Engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      filename: "ellie",
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  // 로그아웃 상태일 때 로그인 페이지로 이동
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards}></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
