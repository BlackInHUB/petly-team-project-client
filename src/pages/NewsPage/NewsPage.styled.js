import styled from "styled-components";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (min-width: 320px) {
        padding: 42px 20px 100px 20px;
    }
    
    @media screen and (min-width: 768px) {
        padding: 88px 32px 100px 32px;
    }
    
    @media screen and (min-width: 1280px) {
        padding: 58px 16px 200px 16px;
    }
`