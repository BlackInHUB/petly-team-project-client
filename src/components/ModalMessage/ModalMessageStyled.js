import styled from 'styled-components';

export const MessageForm = styled.form`
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 4em auto;
  padding: 20px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.userDataShadow};
  border-radius: ${p => p.theme.radii.big};

  @media (max-width: 767px) {
    max-width: 600px;
    padding: 10px;
  }

  @media (min-width: 768px) {
    width: 608px;
  }

  @media (min-width: 1280px) {
    width: 618px;
  }

  & .react-input-emoji--container {
    margin: 16px 0;

    :hover {
      border: ${p => p.theme.borders.normal}
        ${p => p.theme.colors.hoveredAccent};
    }
  }

  & .react-input-emoji--wrapper {
    padding: 10px 12px;
    background: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.small} ${p => p.theme.colors.accent};
  }

  & .react-input-emoji--input {
    min-height: 200px;
    font-family: ${p => p.theme.fonts.body};
    font-style: ${p => p.theme.fontStyle.normal};
    font-weight: ${p => p.theme.fontWeights.thin};
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.inputPlaceholder};
    padding: 0;
  }

  & .react-input-emoji--placeholder {
    display: block;
    top: 12px;
    left: 10px;
  }

  & .react-input-emoji--button {
    @media (max-width: 767px) {
      position: absolute;
      top: -14px;
      right: 14px;
      background: ${p => p.theme.colors.white};
      padding: 0;
    }
  }
`;

export const MessageTitle = styled.h2`
  font-style: ${p => p.theme.fontStyle.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[8]};
  line-height: ${p => p.theme.fontHeight.xl};
  text-align: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text};
  margin-bottom: 40px;
  width: 100%;

  @media (max-width: 767px) {
    font-weight: ${p => p.theme.fontWeights.bold};
    ${p => p.theme.fontSizes[5]};
    line-height: ${p => p.theme.fontHeight.l};
  }
`;

export const MessageNameInput = styled.input`
  background: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};
  padding: 9px 12px;
  width: 300px;
  font-style: ${p => p.theme.fontStyle.normal};
  font-weight: ${p => p.theme.fontWeights.thin};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.fontHeight.l};
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.inputPlaceholder};
`;
