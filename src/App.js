import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import React, { useState } from "react";
import wordsData from "./resources/words.json";

const App = () => {
  const [words, setWords] = useState(wordsData);

  // Функция для добавления нового слова
  const addWord = () => {
    const newWord = {
      id: Date.now().toString(),
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      tags_json: "[]",
    };

    setWords([...words, newWord]);
  };

  // Функция для удаления слова по его id
  const deleteWord = (id) => {
    const updatedWords = words.filter((word) => word.id !== id);
    setWords(updatedWords);
  };

  // Функция для редактирования значений слова
  const editWord = (id, field, value) => {
    const updatedWords = words.map((word) => {
      if (word.id === id) {
        return { ...word, [field]: value };
      }
      return word;
    });

    setWords(updatedWords);
  };

  return (
    <div>
      <Header />
      <HomePage words={words} deleteWord={deleteWord} editWord={editWord} />
      <Footer addWord={addWord} />
    </div>
  );
};

export default App;
