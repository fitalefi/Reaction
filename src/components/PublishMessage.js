import React, { useState } from 'react';
import { useAppContext } from '../hooks';
import { newMessage } from '../state/actions';

const PublishMessage = () => {
  const { dispatch } = useAppContext();
  const [text, setText] = useState('');

  const updateText = (event) => setText(event.target.value);

  const publishMessage = () => dispatch(newMessage(text));

  const handleKeyPress = (event) =>
    event.key === 'Enter' && publishMessage(text);

  return (
    <div>
      <h3>Got something to say?</h3>
      <input
        value={text}
        onChange={updateText}
        onKeyPress={handleKeyPress}
      />{' '}
      <button onClick={publishMessage}>Publish</button>
    </div>
  );
};

export default PublishMessage;
