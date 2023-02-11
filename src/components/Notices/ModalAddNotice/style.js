import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 28px;
    padding-bottom: 8px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  align-items: flex-start;
`;

export const Label = styled.label`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.fontHeight.const};
  font-weight: ${p => p.theme.fontWeights.normal};

  padding-bottom: 8px;

  @media (min-width: 768px) {
    padding-bottom: 12px;
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const Input = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  height: 40px;
  width: 100%;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.thin};

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.big};
  border-color: ${p => p.theme.colors.accent};
  padding-left: 14px;

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:hover {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
    border-color: ${p => p.theme.colors.hoveredAccent};
  }
  &:focus {
    outline-color: ${p => p.theme.colors.hoveredAccent};
    outline-width: 3px;
    box-shadow: none;

    border-color: transparent;
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  font-family: 'Manrope', sans-serif;
  ::-webkit-scrollbar {
    display: none;
  }

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.thin};

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.accent};
  padding: 16px 18px;

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:hover {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
    border-color: ${p => p.theme.colors.hoveredAccent};
  }
  &:focus {
    outline-color: ${p => p.theme.colors.hoveredAccent};
    outline-width: 3px;
    box-shadow: none;

    border-color: transparent;
  }

  ::placeholder {
    font-family: 'Manrope', sans-serif;
  }

  @media (min-width: 768px) {
  }
`;
export const FormButtonContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormButtonContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    gap: 20px;
    flex-direction: row-reverse;
    width: 380px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Title = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[8]};
  }
`;

export const TopText = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: -1%;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const Img = styled.img`
  width: 51px;
  height: 60px;
  &:hover {
    filter: grayscale(0%) !important;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    filter: grayscale(0%) !important;
    cursor: pointer;
  }
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const LabelPhotoInput = styled.label`
  background-color: ${p => p.theme.colors.background};

  width: 116px;
  height: 116px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.accent};

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
    cursor: pointer;
    outline: none;
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;
export const PriceContainer = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;
export const ImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 116px;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;
export const ImagePlus = styled.img`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  position: relative;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  z-index: 2;
`;
export const Image = styled.img`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  object-fit: cover;
  position: absolute;
  top: 8px;
  left: 8px;
  width: 100px;
  height: 100px;
  @media (min-width: 768px) {
    top: 10px;
    left: 10px;
    width: 120px;
    height: 120px;
  }
`;

export const Error = styled.p`
  padding: ${p => p.theme.space[1] + 'px'} ${p => p.theme.space[5] + 'px'} 0px
    ${p => p.theme.space[5] + 'px'};
  color: ${p => p.theme.colors.hoveredAccent};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.s * p.theme.fontSizes[3].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
