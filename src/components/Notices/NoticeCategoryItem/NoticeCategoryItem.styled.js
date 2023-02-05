import styled from 'styled-components';

export const NoticeCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 288px;
  height: 606px;

  //временно
  margin-bottom: 32px;

  background: ${p => p.theme.colors.white};

  box-shadow: ${p => p.theme.shadows.mainShadow};
  border-radius: ${p => p.theme.radii.none} ${p => p.theme.radii.none}
    ${p => p.theme.radii.big} ${p => p.theme.radii.big};

  & span.category {
    position: absolute;
    left: 0;
    top: 20px;
    width: 158px;
    height: 28px;
    align-content: center;
    justify-content: center;
    padding: 6px 20px;

    font-style: ${p => p.theme.fontStyle.normal};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[0]};
    line-height: ${p => p.theme.fontHeight.l};
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: ${p => p.theme.colors.text};

    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
    border-radius: ${p => p.theme.radii.none} ${p => p.theme.radii.big}
      ${p => p.theme.radii.big} ${p => p.theme.radii.none};
  }

  & img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  & h3 {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[6]};
    line-height: ${p => p.theme.fontHeight.l};
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.text};

    max-width: 232px;
    margin-bottom: 20px;
  }
`;

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 20px;

  & p {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    min-width: 50px;
  }

  & span.pet-info-title {
    width: 50px;
  }

  & span {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};

    color: ${p => p.theme.colors.text};
  }

  & span + span {
    margin-left: 36px;
  }
`;

export const HeartBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 44px;
  height: 44px;
  padding: 8px;
  font-size: ${p => p.theme.fontSizes[6]};
  color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  & svg.active {
    fill: ${p => p.theme.colors.accent};
  }

  &:hover,
  &:focus-visible {
    border: ${p => p.theme.borders.small} ${p => p.theme.colors.hoveredAccent};
    color: ${p => p.theme.colors.hoveredAccent};
    cursor: pointer;

    
`;
