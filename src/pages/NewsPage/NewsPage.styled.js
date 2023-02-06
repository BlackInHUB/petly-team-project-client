import styled from "styled-components";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media screen and (min-width: 320px) {
        padding: 0x 0px 100px 0px;
    }
    
    @media screen and (min-width: 768px) {
        padding: 0px 0px 100px 0px;
    }
    
    @media screen and (min-width: 1280px) {
        padding: 0px 0px 200px 0px;
    }
`

export const Header = styled.h3`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[9]};
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes[5]};
            margin-bottom: 28px;
        }
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.text};
    text-align: center;
    margin-bottom: 40px;
`