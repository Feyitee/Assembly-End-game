import React from "react";
import { languages } from "./languages";
import clsx from "clsx";

const App = () => {
  const [currentWord, setCurrentWord] = React.useState("react");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessedLetters, setGuessedletters] = React.useState([]);
  console.log(guessedLetters);

  function addGuessedLetter(letter) {
    setGuessedletters((prevLetters) => {
      return prevLetters.includes(letter)
        ? prevLetters
        : [...prevLetters, letter];
    });
  }
  const keyboardElements = alphabet.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        key={index}
        className={className}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toLocaleUpperCase()}
      </button>
    );
  });

  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New game</button>
    </main>
  );
};

export default App;
