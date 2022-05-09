import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService, FileInput }) => {
  const [cards, setCards] = useState({
    // key, value
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
          FileInput={FileInput}
        ></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
