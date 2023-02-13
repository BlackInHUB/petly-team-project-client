import styled from 'styled-components';

export const MessageForm = styled.form`
  .react-input-emoji--wrapper:focus-within {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  height: auto;
  font-family: ${p => p.theme.fonts.body};

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
    max-width: calc(100vw - 40px);
  }

  @media (min-width: 768px) {
    width: 618px;
  }

  .react-emoji-picker--container {
    top: 100px;
  }
  .react-emoji-picker--wrapper {
    background: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.small} ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.shadows.mainShadow};
  }

  & .react-input-emoji--container {
    margin: 16px 0;
  }

  .react-input-emoji--button {
    svg {
      fill: ${p => p.theme.colors.accent};
    }

    :hover svg,
    :focus svg {
      fill: ${p => p.theme.colors.hoveredAccent};
    }
  }

  & .react-emoji-picker--wrapper,
  .react-emoji-picker--container,
  .react-emoji-picker .emoji-mart {
    max-width: 70vw;
    max-height: 35vh;
  }

  & .react-input-emoji--wrapper {
    padding: 10px 12px;
    background: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.small} ${p => p.theme.colors.accent};

    &:hover {
      border-color: ${p => p.theme.colors.hoveredAccent};
    }

    ::placeholder {
      font-family: 'Manrope', sans-serif;
    }
  }

  & .react-input-emoji--input {
    min-height: 200px;
    font-family: ${p => p.theme.fonts.body};
    font-style: ${p => p.theme.fontStyle.normal};
    font-weight: ${p => p.theme.fontWeights.thin};
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.text};
    padding: 0;
  }

  & .react-input-emoji--placeholder {
    display: block;
    top: 12px;
    left: 10px;
    color: ${p => p.theme.colors.inputPlaceholder};
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
  border-radius: ${p => p.theme.radii.normal};
  padding: 9px 12px;
  width: 70%;
  font-style: ${p => p.theme.fontStyle.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.fontHeight.l};
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text};

  &:hover {
    border-color: ${p => p.theme.colors.hoveredAccent};
  }
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
    outline-color: ${p => p.theme.colors.hoveredAccent};

    border-color: ${p => p.theme.colors.hoveredAccent};
  }
`;

export const ButtonWrapper = styled.div`
  width: 70%;
  @media (max-width: 420px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
