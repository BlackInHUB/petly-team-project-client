import styled from "styled-components";

export const WrapperUserPage = styled.div`
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.accent};
    
    margin-left: auto;
    margin-right: auto;
    margin-top: ${p => p.theme.space[12]}px;
    margin-bottom: ${p => p.theme.space[13]}px;

    @media screen and (min-width: 1280px) {
        display: flex;
        justify-content: space-between;
        margin-top: 69px;
        margin-bottom: ${p => p.theme.space[10]}px;
    }  
`
