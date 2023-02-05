import styled from "styled-components";

export const StyledTytle = styled.h1`
    font-size: ${p => p.theme.fontSizes[5]};
    line-height: ${p => p.theme.fontHeight.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    text-align: center;
    margin-bottom: ${p => p.theme.space[8]}px;

    @media (min-width: 768px) {
        margin-bottom: ${p => p.theme.space[10]}px;
        font-size: ${p => p.theme.fontSizes[9]};
    }
`