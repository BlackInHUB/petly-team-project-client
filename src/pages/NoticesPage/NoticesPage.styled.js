import styled from 'styled-components';

export const Title = styled.h2`
    text-align: center;
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.text};
    margin-bottom: ${p => `${p.theme.space[5] - 4}px`};
    @media screen and (max-width: 1279px) and (min-width: 768px) {
        margin-bottom: ${p => `${p.theme.space[5] + 8}px`};
    }
`;