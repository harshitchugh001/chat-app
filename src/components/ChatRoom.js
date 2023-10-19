import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); 

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    
    socket.on('chatMessages', (messages) => {
      console.log('Received chatMessages:', messages); 
      setChatMessages(messages);
    });
  
    
    console.log('Is socket connected:', socket.connected); 
  
   
    return () => {
      socket.disconnect();
      console.log('Socket disconnected'); 
    };
  }, []);

  const handleSendMessage = () => {
    console.log('Sending message:', message);
    socket.emit('chatMessage', { text: message, sender: 'User' }, (response) => {
      console.log('Message sent:', response); 
    });
  
    setMessage('');
  };
  

  return (
    <div className="chat-room h-screen w-4/5 mx-auto p-5 border border-gray-300 rounded-md shadow-lg">
      <div className="chat-room-header text-3xl font-semibold mb-5">Chat Room</div>
      <div className="chat-room-body h-5/6 overflow-y-auto bg-white rounded-md p-3">
        {chatMessages.map((chatMessage, index) => (
          <div key={index} className="chat-message mb-4">
            <span className="chat-message-sender font-bold text-blue-500">
              {chatMessage.sender}:
            </span>
            <span className="chat-message-text text-lg ml-2">{chatMessage.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-room-footer mt-5">
        <input
          className="w-full border border-gray-300 p-2 rounded-md"
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
