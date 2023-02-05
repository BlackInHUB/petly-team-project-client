import styled from 'styled-components';

export const NoticeCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 288px;
  height: 606px;

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
