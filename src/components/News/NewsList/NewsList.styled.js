import styled from "styled-components";

export const Header = styled.h3`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[9]};
        @media screen and (max-width: 767px) {
            font-size: ${p => p.theme.fontSizes[5]};
        }
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.text};
    text-align: center;
`
export const List = styled.div`
    margin-left: auto;
    margin-right: auto;
@media screen and (min-width: 320px) {
    padding-top: 20px; 
    padding-bottom: 20px; 
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    gap: 40px 0px;
    justify-content: center;
}

@media screen and (min-width: 768px) {
    padding-top: 59px;
    display: grid;
    max-width: 1279px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 60px 33px;
    justify-content: center;
}

@media screen and (min-width: 1280px) {
    padding-top: 69px; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 60px 33px;
    justify-content: start;
}
`
export const NewsListItem = styled.li`
    list-style-type: none;
`
export const Title = styled.h4`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[5]};
    color: ${p => p.theme.colors.text};
`
export const Description = styled.p`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: ${p => p.theme.fontHeight.l};
    max-height: 300px;
    overflow: hidden;
    color: ${p => p.theme.colors.newsText};
`

export const DateLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Date = styled.p`
    display: inline-block;
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.gray};
    font-weight: ${p => p.theme.fontWeights.thin};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
`

export const Link = styled.a`
    display: inline-block;
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.thin};;
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.accent};
`

export const Decor = styled.div`
    background: ${p => p.theme.colors.gradient};
    border-radius: 3px;
    @media screen and (min-width: 320px) {
        width: 200px;
        height: 4px;
    }
    @media screen and (min-width: 768px) {
        width: 280px;
        height: 8px;
    }
    @media screen and (min-width: 1280px) {
        width: 340px;
        height: 8px;
    }
`