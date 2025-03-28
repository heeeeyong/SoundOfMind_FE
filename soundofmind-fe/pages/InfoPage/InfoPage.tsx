import React from 'react';
import { Wrapper, Profill, TalkButton, Self, Menu } from './InfoPage';
import back from '../../src/assets/common/back.svg';
import chat from '../../src/assets/infopage/chat.svg';

const InfoPage: React.FC = () => {
  return (
    <Wrapper>
      <Profill>
        <div className="main">
          <div className="back">
            <img src={back} />
          </div>
          <div className="pic">
            <img src="https://placehold.co/88x88" />
          </div>
          <div className="name">IamYourAvatar</div>
        </div>
        <TalkButton>
          <img src={chat} />
          <div>대화하기</div>
        </TalkButton>
      </Profill>
      <Self>
        <div className="intro">자기소개</div>
        <div className="content"></div>
      </Self>
      <Menu>
        <div className="menuitem">즐겨찾기</div>
        <div className="menuitem">친구 등록</div>
        <div className="menuitem">아바타 숨기기</div>
        <div className="menuitem">신고하기</div>
      </Menu>
    </Wrapper>
  );
};

export default InfoPage;
