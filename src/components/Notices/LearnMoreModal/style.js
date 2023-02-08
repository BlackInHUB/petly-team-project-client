import styled from 'styled-components';

export const ModalForm = styled.div`
  position: absolute;

  scrollbar-width: none;

  left: 50%;
  width: 280px;
  max-height: calc(100vh - 40px);
  overflow-y: scroll;
  z-index: 1;
  transform: translateY(20px) translateX(-50%);
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 60px 20px 40px 20px;

  gap: 40px;

  background-color: ${p => p.theme.colors.white};
  z-index: 1;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.mainShadow};

  @media (min-width: 768px) {
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    gap: 32px;
    padding: 32px 20px;
    width: 704px;
  }
`;
export const ModalCloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  right: 20px;
  top: 20px;

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};

  width: 34px;
  height: 34px;

  :hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    top: 12px;
    width: 44px;
    height: 44px;
  }
`;

export const PetPhotoAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const PetPhotoAndInfoAndCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const PetPhotoContainer = styled.div`
  position: relative;
`;

export const PetPhoto = styled.img`
  object-fit: cover;
  width: 240px;
  height: 240px;
  border-radius: 0 0 40px 40px;

  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;

export const PetCategory = styled.div`
  position: absolute;
  top: 20px;
  left: 0;

  width: 158px;
  height: 28px;
  border-radius: 0 40px 40px 0;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.paleWhite};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.fontHeight.l};
`;

export const PetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: start;
  width: 100%;
  @media (min-width: 768px) {
    width: 310px;
  }
`;

export const PetTitle = styled.div`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: -1%;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  @media (min-width: 768px) {
    width: 380px;
    flex-direction: row-reverse;
  }
`;
