import { NavBtn, NavContainer } from "./NoticesCategoriesNav.Styled";
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = () => {
    const { isLoggedIn } = useAuth();

    return (
        <NavContainer>
            <NavBtn to='sell'>sell</NavBtn>
            <NavBtn to='lost-found'>lost/found</NavBtn>
            <NavBtn to='for-free'>in good hands</NavBtn>
            {isLoggedIn && <NavBtn to='favorites' >favorite ads</NavBtn>}
            {isLoggedIn && <NavBtn to='own'>my ads</NavBtn>}
        </NavContainer>
    )
};
