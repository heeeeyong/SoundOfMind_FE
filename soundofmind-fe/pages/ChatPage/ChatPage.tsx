import React, { useState } from 'react';
import {
  Container,
  Header,
  AvatarWrapper,
  Avatar,
  CallInterface,
  Text,
  ProgressBar,
  TimeText,
  ButtonContainer,
  IconButton,
} from './ChatPagestyles';
import logo from '../../src/assets/chatpage/logo.svg';
import mute from '../../src/assets/chatpage/mute.svg';
import done from '../../src/assets/chatpage/done.svg';

const ChatPage: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <Container>
      <Header>IamYourAvarta</Header>

      <AvatarWrapper>
        <Avatar src={logo} alt="Avatar" />
      </AvatarWrapper>

      {/* 통화 인터페이스 */}
      <CallInterface>
        <Text>아바타가 당신의 말을 듣고 있어요!</Text>

        <ProgressBar>
          <TimeText>00:00</TimeText>
        </ProgressBar>

        <ButtonContainer>
          <IconButton onClick={() => setIsMuted(!isMuted)}>
            <div className="circle">
              <img src={mute} />
            </div>
            <div className="text">음소거</div>
          </IconButton>
          <IconButton>
            <div className="circle">
              <img src={done} />
            </div>
            <div className="text">통화종료</div>
          </IconButton>
        </ButtonContainer>
      </CallInterface>
    </Container>
  );
};

export default ChatPage;
