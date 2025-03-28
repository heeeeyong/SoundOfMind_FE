import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatPage from '../pages/ChatPage/ChatPage.tsx';
import MainPage from '../pages/Main/MainPage.tsx';
import InfoPage from '../pages/InfoPage/InfoPage.tsx';
import Chatting from '../pages/Chatting/Chatting.tsx';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/chatpage" element={<ChatPage />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/infopage" element={<InfoPage />} />
      <Route path="/chatting" element={<Chatting />} />
    </Routes>
  );
};

export default Router;
