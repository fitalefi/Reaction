import React, { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import PublishMessage from './PublishMessage';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage dispatch={dispatch} />
    </div>
  );
};

export default App;
