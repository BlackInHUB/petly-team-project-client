import styled from "styled-components"

export const UserDataContainer = styled.div`
    margin-bottom: 42px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-bottom: ${ p => p.theme.space[0]}px;
    }
`

export const UserDataCommonContainer = styled.div`
    position: relative;
    /* border: 1px solid red; */
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow};
    padding-bottom: 84px;
`

export const UserDataImgWrapper = styled.div`
    margin-bottom: ${p => p.theme.space[9]}px;

    @media screen and (min-width: 768px) {
        margin-bottom: ${p => p.theme.space[0]}px;
    }
`

export const UserDataImg = styled.img`
    width: 233px;
    height: 233px;
    border-radius: ${p => p.theme.radii.round};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[4]}px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`

export const EditCameraWrapper = styled.div`
    display: flex;
    justify-content: baseline;
    flex-direction: row-reverse;
`

export const EditPhotoLabel = styled.label`
    display: block;
    cursor: pointer;
    margin-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[7]}px;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[0]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: 1.8;

    @media screen and (min-width: 768px) {
        padding-right: ${p => p.theme.space[0]}px;
    }
`

export const EditPhotoInput = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
`

export const UserDataList = styled.ul`
     @media screen and (min-width: 768px) {
        padding-top: ${p => p.theme.space[5]}px;
        padding-bottom: 55px;
        width: 379px;
    }
`




export const UserDataFormItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[4]}px;

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`

export const UserDataLabel = styled.label`
    display: block;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[0]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: 1.33;
    letter-spacing: 0.04em;
`

export const UserDataInputBtnWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const UserDataInput = styled.input`
    box-sizing:border-box;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[0]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: 1.33;
    letter-spacing: 0.04em;
    width: 159px;
    height: 24px;
    padding: 4px 18px;
    border-radius: ${p => p.theme.radii.big};
    background-color: ${p => (p.disabled ? p.theme.colors.white : p.theme.colors.background)};
    border: ${p => p.disabled ? p.theme.borders.small : p.theme.borders.none};
    border-color: ${p => p.disabled ? 'transparent' : p.theme.colors.inputColor};

    :focus {
    outline-color: transparent;
  }
`
export const UserDataBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 20px;
    height: 20px;
    background: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.round};
    border-color: transparent;
    margin-left: 9px;
`