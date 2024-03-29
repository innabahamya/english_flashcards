import React, { useState} from 'react';

import './wordCard.scss';

const WordCard = ({ word, deleteWord, editWord, saveWord, cancelEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState(word);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedValues({ ...editedValues, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (id) => {
    saveWord(id);
    setIsEditing(false);
    editWord(id, "english", editedValues.english);
    editWord(id, "transcription", editedValues.transcription);
    editWord(id, "russian", editedValues.russian);
    editWord(id, "tags", editedValues.tags);
    editWord(id, "tags_json", editedValues.tags_json);
  };

  const handleCancelClick = (id) => {
    cancelEdit(id);
    setIsEditing(false);
    setEditedValues(word);
  };

  const { id, english, transcription, russian, tags } = word;

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="english"
            value={editedValues.english}
            onChange={handleInputChange}
          />
        ) : (
          english
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="transcription"
            value={editedValues.transcription}
            onChange={handleInputChange}
          />
        ) : (
          transcription
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="russian"
            value={editedValues.russian}
            onChange={handleInputChange}
          />
        ) : (
          russian
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="tags"
            value={editedValues.tags}
            onChange={handleInputChange}
          />
        ) : (
          tags
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={() => handleSaveClick(id)}>Сохранить</button>
            <button onClick={() => handleCancelClick(id)}>Отмена</button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick}>Редактировать</button>
            <button onClick={() => deleteWord(id)}>Удалить</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default WordCard;