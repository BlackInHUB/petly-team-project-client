import styled from "styled-components";

export const List = styled.div`
    /* margin-left: auto;
    margin-right: auto; */
@media screen and (min-width: 320px) {
    padding-top: 40px;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    gap: 40px 0px;
}

@media screen and (min-width: 768px) {
    padding-top: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 33px;
}

@media screen and (min-width: 1280px) {
    padding-top: 60px; 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 33px;
}
`
export const ListItem = styled.li`

`
export const Title = styled.h4`
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Date = styled.p`
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.gray};
    font-weight: ${p => p.theme.fontWeights.thin};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
`

export const Link = styled.a`
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.thin};;
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
    color: ${p => p.theme.colors.accent};

    &:hover,
    :focus {
        color: ${p => p.theme.colors.hoveredAccent}
    }
`

export const Decor = styled.div`
    background: ${p => p.theme.colors.gradient};
    border-radius: 3px;
    margin-bottom: 4px;
    width: 75%;
    @media screen and (min-width: 320px) {
        height: 4px;
        min-width: 200px;
    }
    @media screen and (min-width: 768px) {
        height: 8px;
        width: 80%;
        min-width: 280px
    }
    @media screen and (min-width: 1280px) {
        width: 85%;
        height: 8px;
    }
`