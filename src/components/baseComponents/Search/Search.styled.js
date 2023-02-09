import styled from "styled-components";
import {ReactComponent as searchPic} from "../../../images/icons/search.svg";
import {ReactComponent as xCirlce} from "../../../images/icons/x-circle.svg";

export const IconX = styled(xCirlce)`
padding: 0;
width: 18px;
height: auto;
stroke: ${p => p.theme.colors.black};
transition: ${p => p.theme.transition.all};

@media (min-width: 768px) {
    width: 22px;
    }

    &:hover,
    :focus {
        stroke: ${p => p.theme.colors.accent};
    }
`

export const IconS = styled(searchPic)`
padding: 0;
width: 18px;
height: auto;
fill: ${p => p.theme.colors.black};
transition: ${p => p.theme.transition.all};

@media (min-width: 768px) {
    width: 24px;
    }

    &:hover,
    :focus {
        fill: ${p => p.theme.colors.accent};
    }
`

export const SearchInput = styled.input`
    width: 100%;
    padding-top: 10px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    outline: none;
    border: ${p => p.theme.borders.small} transparent;
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.mainShadow};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: ${p => p.theme.fontHeight.l};
    font-weight: ${p => p.theme.fontWeights.normal};
    transition: ${p => p.theme.transition.all};

&::placeholder {
    color: ${p => p.theme.colors.search};
}

@media (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[4]};
        line-height: ${p => p.theme.fontHeight.l};
        padding-left: ${p => p.theme.space[6]}px;
        padding-right: ${p => p.theme.space[6]}px;
        border-radius: ${p => p.theme.radii.big};
    }

    &:focus {
        border: ${p => p.theme.borders.small} ${p => p.theme.colors.focusedSearch};
    }

&::-webkit-search-cancel-button {
    -webkit-appearance: none;
}
`

export const SearchButton = styled.button`
padding: 0;
position: absolute;
top: 50%;
right: ${p => p.theme.space[4]}px;
outline: none;
width: fit-content;
background-color: transparent;
border: none;
transform: translate(0, -40%);
cursor: pointer;

@media (min-width: 768px) {
    right: ${p => p.theme.space[6]}px;
}
`

export const SearchForm = styled.form`
    position: relative;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 608px;
    }
`