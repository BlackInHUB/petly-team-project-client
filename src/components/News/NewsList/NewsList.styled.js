import styled from "styled-components";

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
    position: relative;
`
export const Title = styled.h4`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[5]};
    color: ${p => p.theme.colors.text};
    
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    margin-bottom: 16px;
`
export const Description = styled.p`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: ${p => p.theme.fontHeight.l};
    text-overflow: ellipsis;
    word-break: normal;
    overflow: hidden;
  

    color: ${p => p.theme.colors.newsText};
        @media screen and (max-width: 767px) {
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
        }
        @media screen and (min-width: 768px) {
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
        }
        @media screen and (min-width: 1280px) {
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
        }
    margin-bottom: 40px;
`

export const DateLink = styled.div`
    position: relative;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // align-items: center;
`

export const Date = styled.p`
    display: inline-block;
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.gray};
    font-weight: ${p => p.theme.fontWeights.thin};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
    position: absolute;
    left: 0px;
`

export const Link = styled.a`
    display: inline-block;
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.thin};;
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.accent};
    position: absolute;
    right: 0px;
`

export const Decor = styled.div`
    background: ${p => p.theme.colors.gradient};
    border-radius: 3px;
    margin-bottom: 4px;
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