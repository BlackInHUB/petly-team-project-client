import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Li = styled.li`
  display: flex;
  width: 100%;
  flex-shrink: 1;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  overflow: hidden;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.p`
  width: 100%;
  text-align: start;
  overflow: hidden;
  flex: 0.5 0.5 auto;
`;
const ItemBold = styled.p`
  width: 100%;
  text-align: start;
  font-weight: ${p => p.theme.fontWeights.bold};
  overflow: hidden;
`;
const Link = styled.a`
  color: ${p => p.theme.colors.link};
`;

const PetInfo = props => {
  return (
    <Ul>
      <Li>
        <ItemBold>Name:</ItemBold>
        <Item>{props.data?.name}</Item>
      </Li>
      <Li>
        <ItemBold>Birthday:</ItemBold>
        <Item>{props.data?.birthday}</Item>
      </Li>
      <Li>
        <ItemBold>Breed:</ItemBold>
        <Item>{props.data?.breed}</Item>
      </Li>
      <Li>
        <ItemBold>Location:</ItemBold>
        <Item>{props.data?.location}</Item>
      </Li>
      <Li>
        <ItemBold>The sex:</ItemBold>
        <Item>{props.data?.sex}</Item>
      </Li>
      <Li>
        <ItemBold>Email:</ItemBold>
        <Item>
          <Link href={`mailto:${props.data?.owner.email}`}>
            {props.data?.owner.email}
          </Link>
        </Item>
      </Li>
      <Li>
        <ItemBold>Phone:</ItemBold>
        <Item>{props.data?.owner.phone}</Item>
      </Li>
      {props.data?.category === 'sell' && (
        <Li>
          <ItemBold>Price:</ItemBold>
          <Item>{props.data?.price}</Item>
        </Li>
      )}
    </Ul>
  );
};

PetInfo.propTypes = {
  data: PropTypes.object,
};

export default PetInfo;
