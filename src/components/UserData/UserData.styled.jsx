import styled from "styled-components"

export const UserDataContainer = styled.div`
    /* background-color: ${p => p.theme.colors.white};
    border-top-left-radius: ${p => p.theme.radii.normal};
    border-top-right-radius:  ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.userDataShadow}; */
    margin-bottom: ${p => p.theme.space[10]}px;
`

export const UserDataImgWrapper = styled.div`
    margin-bottom: ${p => p.theme.space[9]}px;
`

export const UserDataImg = styled.img`
    width: 233px;
    height: 233px;
    border-radius: ${p => p.theme.radii.round};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[4]}px;



    object-fit: cover;
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
`

export const EditPhotoInput = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
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