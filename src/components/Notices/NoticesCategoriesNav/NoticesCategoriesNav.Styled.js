import styled from 'styled-components';

export const NoticesCategoriesNavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
    display: flex;
    flex-direction: row;
    align-items: center;
    letter-spacing: 0.04em;
    padding: 10px 28px;
    color: ${p => p.theme.colors.text};

    gap: 10px;
    background: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.big};

    text-decoration: none;

    & img {
      border-radius: 50%;
      background: white;
    }

    &.active {
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.white};
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
      border: ${p => p.theme.borders.normal}
        ${p => p.theme.colors.hoveredAccent};
      color: ${p => p.theme.colors.hoveredAccent};
    }

    @media (max-width: 767.99px) {
      font-size: ${p => p.theme.fontSizes[1]};
      margin-left: 0;
    }
  }

  & a + a {
    margin-left: 12px;
  }
`;
