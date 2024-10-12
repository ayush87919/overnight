// src/components/chat/ChatArea.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const ChatArea = ({ chatID }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'chats', chatID, 'messages'),
      (snapshot) => {
        const newMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(newMessages);
      }
    );

    return () => unsubscribe();
  }, [chatID]);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
