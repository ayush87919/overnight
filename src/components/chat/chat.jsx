// src/components/chat/Chat.jsx
import React from 'react';
import ChatArea from './chatarea';
import MessageInput from './messageinput';

const Chat = ({ chatID, userID }) => {
  return (
    <div className="chat-container">
      <ChatArea chatID={chatID} />
      <MessageInput chatID={chatID} userID={userID} />
    </div>
  );
};

export default Chat;
