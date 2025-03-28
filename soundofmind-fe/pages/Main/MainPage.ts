import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 812px;
  width: 375px;
  background-color: white;
`;

export const Header = styled.div`
  height: 160px;
  width: 375px;
`;

export const Title = styled.div`
  width: 100%;

  padding: 41px 25px 0px 25px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .logo {
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    color: black;
    padding-bottom: 25px;
    box-sizing: border-box;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
`;

export const MyAvatar = styled.div`
  width: 325px;
  gap: 12px;
  margin: 0px 25px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;

  img {
    border-radius: 50%;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
  }
`;

export const Body = styled.div`
  height: 100vh;
  width: 375px;
  padding: 8px 25px 0px 25px;
  box-sizing: border-box;

  .title2 {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 17px;
  }
`;

export const Avatar = styled.div`
  width: 100%;
  gap: 12px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  img {
    border-radius: 50%;
  }

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
  }
`;
