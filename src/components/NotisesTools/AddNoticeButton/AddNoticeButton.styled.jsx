import styled from 'styled-components';
import { CircleBtn } from 'components/common/CircleBtn.styled';
import { ReactComponent as IconPlus } from 'images/icons/plus.svg';

export const WrapperAddPet = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  > p {
    font-weight: ${props => props.theme.fontWeights.fw500};
    font-size: ${props => props.theme.fontSizes.fs20};
    line-height: 27px;
    color: ${props => props.theme.colors.mainText};
  }
`;

export const AddPetBtn = styled(CircleBtn)`
  background-color: ${props => props.theme.colors.accent};
  padding: 0;
  width: 40px;
  height: 40px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    background-color: ${props => props.theme.colors.hoverAccent} ;
    transform: scale(1.2);
  }
  @media screen and (max-width: 1279px) and (min-width: 720px) {
    width: 40px;
    height: 40px;
  }
`;
const IconPlus = ({ className }) => <HiOutlinePlus className={className} />;
export const StyledPlus = styled(IconPlus)`
  color: ${props => props.theme.colors.white};
  width: 24px;
  height: 24px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.2);
  }
  @media screen and (max-width: 1279px) and (min-width: 720px) {
    width: 24px;
    height: 24px;
  }
`;
