import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 812px;
  width: 375px;
  background-color: white;
`;

export const Profill = styled.div`
  height: 225px;
  width: 375px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .back {
    position: fixed;
    left: 25px;
    top: 25px;
  }

  .pic {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 25px;

    img {
      border-radius: 5px;
    }
  }
  .name {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    padding-top: 8px;
    padding-bottom: 15px;
    box-sizing: border-box;
  }
`;

export const TalkButton = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 30px;
  background: #d9d9d9;
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;

  div {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const Self = styled.div`
  height: 190px;
  width: 325px;
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;

  .intro {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }

  .content {
    width: 300px;
    height: 160px;
    border-radius: 10px;
    background-color: #d9d9d9;
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.25) inset;
    margin-bottom: 21px;
  }
`;

export const Menu = styled.div`
  display: flex;
  height: auto;
  width: 325px;
  flex-direction: column;
  align-items: center;

  gap: 5px;
  margin: 20px 25px;

  .menuitem {
    background: #d9d9d9;
    width: 300px;
    height: 35px;
    border-radius: 5px;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
  }
`;
