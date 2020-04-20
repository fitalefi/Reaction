import { v4 as uuidv4 } from 'uuid';
import { NEW_MESSAGE } from './types';

export const newMessage = (text) => ({
  type: NEW_MESSAGE,
  item: { id: uuidv4(), text, timestamp: Date.now() },
});
