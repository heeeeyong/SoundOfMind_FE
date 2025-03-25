import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/chatpage" element={<ChatPage />} />
    </Routes>
  );
};

export default Router;
