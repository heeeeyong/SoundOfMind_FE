import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 812px;
  width: 375px;
  background-color: white;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: white;
  height: 80px;
  width: 375px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;

  .name {
    display: flex;
    flex-direction: row;
    gap: 5px;

    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;

    .logo {
      width: 26px;
      height: 26px;
      border-radius: 5px;
      background-color: #4457fc;

      img {
        width: 26px;
        height: 26px;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
  }
`;

export const Body = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 375px;
  background-color: white;
  padding: 80px 25px 100px 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto; /* 스크롤 가능하게! */

  .name2 {
    color: #020202;
    font-family: 'Pretendard Variable';
    font-size: 13px;
    font-weight: 500;
  }

  .other {
    max-width: 266px;
    height: auto;
    border-radius: 15px;
    background-color: #efefef;

    color: #000;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    padding: 13px;
    box-sizing: border-box;
  }

  .mine {
    max-width: 266px;
    height: auto;
    border-radius: 15px;
    background-color: #554acc;

    color: #fff;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    padding: 13px;
    box-sizing: border-box;
    align-self: flex-end; /* ⬅️ 오른쪽 정렬 */
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 20px;
  box-sizing: border-box;
  gap: 10px;

  position: fixed;
  bottom: 0;
  left: 0;
  height: 90px;
  width: 375px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;

  .call {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .box {
    position: relative;
    width: 300px;
    height: 48px;
    color: #bbb;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    padding-left: 15px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: #eee;

    .right {
      position: absolute;
      right: 8px;
      bottom: 4px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
`;
