import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    src: url("/Pretendard/Pretendard-Thin.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src: url("/Pretendard/Pretendard-ExtraLight.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src: url("/Pretendard/Pretendard-Light.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url("/Pretendard/Pretendard-Regular.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url("/Pretendard/Pretendard-Medium.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url("/Pretendard/Pretendard-SemiBold.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url("/Pretendard/Pretendard-Bold.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    src: url("/Pretendard/Pretendard-ExtraBold.otf") format("opentype");
  }
  body {
    font-family: "Pretendard", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    scrollbar-width: none;
  }

  * {
    -ms-overflow-style: none; /* IE, Edge */
  }
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
