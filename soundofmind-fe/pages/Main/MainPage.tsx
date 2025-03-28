import React from 'react';
import { Wrapper, Header, Title, MyAvatar, Body, Avatar } from './MainPage';
import search from '../../src/assets/mainpage/search.svg';
import option from '../../src/assets/mainpage/option.svg';
import my from '../../src/assets/mainpage/my.svg';

const MainPage: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>
          <div className="logo">마음소리 로고</div>
          <div className="icons">
            <div>
              <img src={search} />
            </div>
            <div>
              <img src={option} />
            </div>
            <div>
              <img src={my} />
            </div>
          </div>
        </Title>
        <MyAvatar>
          <img src="https://placehold.co/42x42" />
          <div>IamYourAvatar</div>
        </MyAvatar>
      </Header>
      <Body>
        <div className="title2">친구</div>
        <Avatar>
          <img src="https://placehold.co/42x42" />
          <div>Other Avatar</div>
        </Avatar>
      </Body>
    </Wrapper>
  );
};

export default MainPage;
