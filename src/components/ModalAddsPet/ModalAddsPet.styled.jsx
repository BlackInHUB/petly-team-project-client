import styled from "styled-components"

export const FirstPageAddsPetForm = styled.div`
    position: ${p => p.firstPageHide ? 'fixed' : 'static'};
    opacity: ${p => p.firstPageHide ? 0 : 1};
    width: ${p => p.firstPageHide ? p.theme.space[0] : '100%'};
`

export const SecondPageAddsPetForm = styled.div`
    position: ${p => p.firstPageHide ? 'fixed' : 'static'};
    opacity: ${p => p.firstPageHide ? 0 : 1};
    width: ${p => p.firstPageHide ? p.theme.space[0] : '100%'};

    /* position: ${p => p.firstPageHide ? 'fixed' : 'static'};
    opacity: ${p => p.firstPageHide ? 0 : 1};
    width: ${p => p.firstPageHide ? p.theme.space[0] : '100%'}; */
`