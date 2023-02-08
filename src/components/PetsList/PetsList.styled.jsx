import styled from "styled-components"

export const PetsListWrapper= styled.ul`
    /* padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[10]}px; */

    @media screen and (min-width: 1600px) {
        display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 33px;
    }
`