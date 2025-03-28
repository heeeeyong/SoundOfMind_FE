import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 812px;
  width: 375px;
  background-color: #b6cfed;
  padding-top: 65px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  color: white;
  font-weight: bold;
  border-radius: 15px;
  background: #485afd;
  width: 266px;
  height: 42px;
  border: none;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background: radial-gradient(
    circle,
    rgba(59, 80, 252, 0.3) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

export const CallInterface = styled.div`
  width: 376px;
  height: 248px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.5);
  align-items: center;
  box-sizing: border-box;
  padding-top: 23px;
`;

export const Text = styled.div`
  color: #000;
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const ProgressBar = styled.div`
  width: 341px;
  height: 41px;
  border-radius: 10px;
  background: #eee;

  margin-top: 23px;

  position: relative;
`;

export const TimeText = styled.div`
  color: #888;
  font-family: 'Noto Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  position: absolute;
  top: 9.5px;
  right: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 122px;
`;

export const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  gap: 2px;

  .text {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
  }

  .circle {
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;

    width: 52px;
    height: 52px;
    background-color: #eeeeee;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
