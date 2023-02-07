import styled from 'styled-components';

export const Time = styled.p`
    padding-top:${p => p.theme.fontSizes[0]};

    +p{
        margin-bottom: ${p => p.theme.space[2]}px;
    }

    @media screen and (min-width: 768px){
        padding-top:${p => p.theme.fontSizes[2]};
        font-size: ${p => p.theme.fontSizes[1]};
    }

    @media screen and (min-width: 1280px){
        font-size: ${p => p.theme.fontSizes[2]};
    }
`;

export const TimeList = styled.li`
    position: relative;

    ul{
        position: absolute;
        padding:${p => p.theme.fontSizes[0]};
        background: ${p => p.theme.colors.white};
        border: 1px solid ${p => p.theme.colors.accent};
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: ${p => p.theme.radii.small};
        left:-5px;
        top:100%;

        opacity:0;
        pointer-events:none;
        transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    :hover{
        color: ${p => p.theme.colors.accent};
    }

    :hover ul {
        opacity: 1;
        transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
        color: ${p => p.theme.colors.black};
    }
`