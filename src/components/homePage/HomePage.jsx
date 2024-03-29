import React from 'react';
import WordCard from '../wordCard/WordCard';

import "./homePage.scss"

const HomePage = ({ words, deleteWord, editWord, saveWord, cancelEdit }) => {
  return (
    <main className='main'>
      <h2>List of words</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th>Theme</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              deleteWord={deleteWord}
              editWord={editWord}
              saveWord={saveWord}
              cancelEdit={cancelEdit}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
  
  export default HomePage;

