import styled from "styled-components";

export const Header = styled.h3`
    font-family: Manrope;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.38;
    text-align: center;
    color: #111111;
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
  font-family: Manrope;
  font-weight: 700;
  font-size: 24px;
  color: #111111;
`

export const Description = styled.p`
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.37;
    max-height: 300px;
    overflow: hidden;
    color: #111321;
`

export const DateLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Date = styled.p`
    display: inline-block;
    font-family: inherit;
    color: #11111199;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
`

export const Link = styled.a`
    display: inline-block;
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    color: #F59256;
`

export const Decor = styled.div`
    background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
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