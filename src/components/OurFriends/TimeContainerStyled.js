import styled from 'styled-components';
import { date } from './TimeContainer';

export const LiStyled = styled.li`
display: flex;
justify-content: space-between;
color:  ${p => (p.index === date.getDay()) ? p.theme.colors.accent : p.theme.colors.text};
text-decoration: ${p => (p.index === date.getDay()) ? p.theme.textDecor.under : p.theme.textDecor.none};
`

export const ListWeek = styled.span`
   
`

export const ListTime = styled.span`

`

export const Time = styled.span`
    font-family: 'Manrope';
    display:block;
    background:${p => p.theme.colors.white};
    padding-top:${p => p.theme.fontSizes[0]};
    line-height: ${p => p.theme.fontHeight.l};
    font-weight:  ${p => p.theme.fontWeights.normal};

    span{
        display:flex;
    }

    span +span{
        padding-bottom: ${p => p.theme.space[2]}px;
    }

    @media screen and (min-width: 768px){
        padding-top:${p => p.theme.fontSizes[2]};
        font-size: ${p => p.theme.fontSizes[1]};
    }

    @media screen and (min-width: 1280px){
        font-size: ${p => p.theme.fontSizes[2]};
    }
`;

export const TimeList = styled.div`
    position: relative;

    button {
        border:${p => p.theme.borders.none};
        cursor: pointer;
    }

    button :active{
        color: ${p => p.theme.colors.accent};
    }

    

    ul{
        position: absolute;
        left:-5px;
        top:100%;
        min-width: 120px;
        font-size: ${p => p.theme.fontSizes[0]};
        line-height: ${p => p.theme.fontHeight.l};
        padding:${p => p.theme.space[4]}px;
        background: ${p => p.theme.colors.white};
        border: 1px solid ${p => p.theme.colors.accent};
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: ${p => p.theme.radii.small};
    }

`