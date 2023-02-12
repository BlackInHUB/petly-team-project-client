import styled from 'styled-components';

export const MessageForm = styled.form`
  width: auto;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0 auto;
  padding: 60px 80px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  & .react-input-emoji--container {
    margin: 16px 0;
  }

  & .react-input-emoji--wrapper {
    padding: 10px 12px;
    background: #fdf7f2;
    border-radius: 20px;
  }

  & .react-input-emoji--input {
    height: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: rgba(17, 17, 17, 0.6);
    padding: 0;
  }

  & .react-input-emoji--placeholder {
    display: block;
    top: 12px;
    left: 10px;
  }
`;

export const MessageTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #111111;
  margin: 5px 10px;
  width: 100%;
`;

export const MessageNameInput = styled.input`
  background: #fdf7f2;
  border: 1px solid #f59256;
  border-radius: 40px;
  padding: 9px 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
`;
