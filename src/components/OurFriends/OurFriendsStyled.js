import styled from 'styled-components';

export const ContainerList = styled.ul`
        @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 32px;
        }

        @media screen and (min-width: 1280px) {
            grid-template-columns: repeat(3, 1fr);
        }
   
`;

export const ContainerItem = styled.li`
    background: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.mainShadow};
    min-width: 280px;
    min-height:192px;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    padding-top: ${p => p.theme.fontSizes[0]};
    padding-bottom: ${p => p.theme.fontSizes[0]};
    margin-bottom: ${p => p.theme.fontSizes[0]};
    @media screen and (min-width: 768px) {
        border-radius: ${p => p.theme.radii.big};
        padding-top: ${p => p.theme.fontSizes[2]};
        padding-bottom: ${p => p.theme.fontSizes[2]};
    }

`;

export const Title = styled.h2`
    font-family: ${p => p.theme.fonts.body};
    font-style: ${p => p.theme.fontStyle.normal};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[0]};
    line-height: ${p => p.theme.fontHeight.l};
    text-decoration: underline;
    text-align: center;
    color: ${p => p.theme.colors.accent};

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[2]};
    }

    @media screen and (min-width: 1280px){
        font-size: ${p => p.theme.fontSizes[4]};
    }

    
`;

export const ContainerCard = styled.div`
    display: flex;
`;

export const ContainerLogo = styled.div`
    margin-right: ${p => p.theme.fontSizes[0]};
    display:flex;
    align-items: center;

    @media screen and (min-width: 768px) {
        margin-right: ${p => p.theme.fontSizes[1]};
    }

    @media screen and (min-width: 1280px) {
        margin-right: ${p => p.theme.fontSizes[2]};
    }
`;

export const Logo = styled.a`
    width: 110px;
    height: 78px;

    @media screen and (min-width: 768px) {
        width: 120px;
        height: 85px;
    }

    @media screen and (min-width: 1280px) {
        width: 158px;
        height: 112px;
    }
`;

export const Time = styled.p`
    padding-top:${p => p.theme.fontSizes[0]};

    @media screen and (min-width: 768px){
        padding-top:${p => p.theme.fontSizes[2]};
        font-size: ${p => p.theme.fontSizes[1]};
    }

    @media screen and (min-width: 1280px){
        font-size: ${p => p.theme.fontSizes[2]};
    }
`;

export const TimeList = styled.ul`
    /* li:first-child{
        color: red;
    } */
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
/* 
    :hover{
        position: absolute;
        outline: 1px solid red;
        width:120px;
        height:160px;
        padding:${p => p.theme.fontSizes[0]};

        background: ${p => p.theme.colors.white};
        border: 1px solid ${p => p.theme.colors.accent};
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: ${p => p.theme.radii.small};
    } */
`;

export const TimeCalendar = styled.li`
    
`;

export const ContainerText = styled.div`
    position: relative;

    font-family: ${p => p.theme.fonts.body};
    font-style: ${p => p.theme.fontStyle.normal};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes[0]};
    line-height: ${p => p.theme.fontHeight.l};
    /* Черный */

    color: ${p => p.theme.colors.text};

    @media screen and (min-width: 768px){
        font-size: ${p => p.theme.fontSizes[1]};
    }

    @media screen and (min-width: 1280px){
        font-size: ${p => p.theme.fontSizes[2]};
    }
`;

export const ContainerAddr = styled.address`
    font-style: ${p => p.theme.fontStyle.normal};
`;

export const AddrLink = styled.a`
    text-decoration: ${p => p.theme.borders.none};
    display: block;
    padding-bottom:${p => p.theme.space[2]}px;
    :last-child{
        padding-bottom:${p => p.theme.space[0]}px;;
    }
    :nth-child(2){
        text-decoration: underline;
    }
    :hover{
        text-decoration: underline;
        color: ${p => p.theme.colors.accent};
    }
    
    @media screen and (min-width: 768px){
            padding-bottom:${p => p.theme.space[3]}px;
    :last-child{
        padding-bottom:${p => p.theme.space[0]}px;;
    }
    }

    @media screen and (min-width: 1280px){
            padding-bottom:${p => p.theme.space[4]}px;
    :last-child{
        padding-bottom:${p => p.theme.space[0]}px;;
    }
    }
`;







