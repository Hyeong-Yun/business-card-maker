import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          updateCard={updateCard}
          deleteCard={deleteCard}
          card={cards[key]}
        />
      ))}
      <CardAddForm onAdd={addCard}></CardAddForm>
    </section>
  );
};

export default Editor;
