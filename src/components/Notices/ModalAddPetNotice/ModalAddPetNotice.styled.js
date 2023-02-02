import styled from 'styled-components';
// import { device } from 'utils/device';

import { ReactComponent as Male } from 'assets/icons/male.svg';
import { ReactComponent as Female } from 'assets/icons/female.svg';

export const IconMale = styled(Male)`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
`;
export const IconFemale = styled(Female)`
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
`;

export const MaddNotModal = styled.div`
  position: relative;
`;
export const ImgClose = styled.img`
  width: 21px;
  height: 21px;
`;
export const MaddNotBtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 50%;

  background-color: #fdf7f2;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    top: 20px;
    right: 20px;
  }

  @media screen and (min-width: 1280px) {
    top: 24px;
    right: 24px;
  }
  &:hover {
    background-color: #f59256;
  }
  &:hover ImgClose {
    fill: black;
  }
`;

export const MaddNotLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MaddNotTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  color: #111111;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const MaddNotDescr = styled.p`
  font-family: 'Manrope';
  font-style: medium;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: -0.01em;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
    margin-bottom: 28px;
  }
`;

export const MaddNotRadioToolbar = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;
export const Item = styled.div`
  display: inline-block;

  &:first-child {
    margin-bottom: 12px;

    @media screen and (min-width: 480px) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
  @media screen and (max-width: 325px) {
    &:not(:last-child) {
      margin-top: 12px;
    }
  }
`;

export const MaddNotLabelToolbar = styled.label`
  display: inline-block;

  font-family: 'Manrope';
  font-style: normal;
  font-size: 14px;
  line-height: 1.36;
  text-align: center;
  letter-spacing: 0.04em;

  border: 2px solid #f59256;
  /* background-color: #f59256; */

  color: #111111;
  border-radius: 40px;
  cursor: pointer;

  padding: 8px 28px;

  @media screen and (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const MaddNotInputToolbar = styled.input`
  position: absolute;

  opacity: 0;
  z-index: 4;
  cursor: pointer;
  width: inherit;
  height: inherit;
  margin-right: 10px;
  &:hover ~ ${MaddNotLabelToolbar} {
    background-color: #f59256;
    color: #ffffff;
  }
  &:checked + ${Item} {
    background-color: #f59256;
    color: #ffffff;
  }
  &:checked + ${MaddNotLabelToolbar} {
    background-color: #f59256;
    color: #ffffff;
  }
`;

export const MaddNotLabel = styled.label`
  display: block;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.1;
  }
`;

// .accent {
//   color: #F59256;
// }
export const MaddNotinput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  padding: 11px 14px 12px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.62;
    padding: 11px 16px 10px;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
`;

export const MaddNotTextarea = styled.textarea`
  width: 100%;
  height: 100px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  padding: 11px 14px;
  outline: none;
  resize: none;

  @media screen and (min-width: 768px) {
    height: 113px;
    padding: 16px 18px;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.85;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
`;

export const MaddNotBlock = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const Title = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.1;
  margin-bottom: 12px;
  color: #000000;
`;

export const MaddNotButton = styled.button`
  display: block;
  width: 100%;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: #111111;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  padding-top: 9px;
  padding-bottom: 9px;

  @media screen and (min-width: 768px) {
    width: 180px;
  }
  &:first-child {
    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
  }

  /* &:last-child {
    @media screen and (min-width: 768px) {
      margin-bottom: 12px;
    } */
  /* } */
`;
export const MaddNotAccentBtn = styled(MaddNotButton)`
  background-color: #f59256;
  color: #ffffff;
`;

export const MaddNotRadioToolbar2 = styled.div`
  margin-bottom: 71px;

  /* @media screen and (min-width: 768px) {
    margin-bottom: 87px;
  } */
`;

export const MaddNotLabelDistance = styled(MaddNotLabel)`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const MaddNotBlockOfRadio = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const MaddNotSexLabel = styled.div`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const MaddNotLabelMale = styled(MaddNotSexLabel)`
  /* &:hover {
    color: #f59256;
  } */
  position: relative;

  margin-right: 40px;

  @media screen and (min-width: 768px) {
    margin-right: 83px;
  }
`;
export const MaddNotLabelFemale = styled(MaddNotSexLabel)`
  position: relative;
  /* &:hover {
    color: #f59256;
  } */
`;
export const MaddNotSexDescr = styled.label`
  text-align: center;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 18px;
  line-height: 1.44px;
  /* &:hover {
    color: #f59256;
  } */

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;
export const MaddNotInputRadio = styled.input`
  /* display: none; */
  position: absolute;

  opacity: 0;
  top: 50px;
  left: -2px;
  z-index: 4;
  cursor: pointer;
  width: inherit;
  height: inherit;
  margin-right: 10px;
  &:hover ~ ${MaddNotSexDescr} {
    /* background-color: #f59256; */
    color: #f59256;
  }
  /* &:checked + ${Item} {
    background-color: #f59256;
    color: #ffffff;
  } */
  &:checked + ${MaddNotSexDescr} {
    /* background-color: #f59256; */
    color: #f59256;
  }
`;

export const MaddNotInputLoad = styled.input`
  display: none;
`;

export const MaddNotLabelLoad = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 116px;
  background: #fdf7f2;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const MaddNotThumbLoadImg = styled.div`
  width: 116px;
  height: 116px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const MaddNotLoadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
