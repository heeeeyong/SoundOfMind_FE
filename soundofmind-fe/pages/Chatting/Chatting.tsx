import React from 'react';
import { Wrapper, Header, Footer, Body } from './Chatting';
import back from '../../src/assets/common/back.svg';
import logo from '../../src/assets/chatpage/logo.svg';
import hamburger from '../../src/assets/chatting/hamburger.svg';
import chat from '../../src/assets/infopage/chat.svg';
import right from '../../src/assets/chatting/right.svg';
import call from '../../src/assets/chatting/call.svg';

const Chatting: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <div>
          <img src={back} />
        </div>
        <div className="name">
          <div className="logo">
            <img src={logo} />
          </div>
          <div>IamYourAvatar</div>
        </div>
        <div className="right">
          <div>
            <img src={chat} />
          </div>
          <div>
            <img src={hamburger} />
          </div>
        </div>
      </Header>
      <Body>
        <div className="name2">IamYourAvatar</div>
      </Body>
      <Footer>
        <div className="call">
          <img src={call} />
        </div>
        <div className="box">
          IamYourAvatar에게 메세지 쓰기
          <div className="right">
            <img src={right} />
          </div>
        </div>
      </Footer>
    </Wrapper>
  );
};

export default Chatting;
