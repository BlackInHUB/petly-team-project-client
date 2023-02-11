import styled from 'styled-components';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Ul = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: hidden;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[2]};
  }

  .overflow {
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
  }

  .overflow:hover + span {
    display: block;
  }
`;

const Item = styled.p`
  position: relative;
  text-align: start;
`;
const ItemBold = styled.p`
  text-align: start;
  font-weight: ${p => p.theme.fontWeights.bold};

  flex: 0.5 0.5 40%;
`;
const NamesContainer = styled.div`
  overflow: visible;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 10px;
`;

const InfoContainer = styled.div`
  white-space: nowrap;

  text-overflow: ellipsis;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    width: 215px;
  }
`;

const Link = styled.a`
  display: block;

  text-overflow: ellipsis;
  color: ${p => p.theme.colors.link};

  :hover {
    filter: drop-shadow(1px 3px 4px #d3d3d3);
  }
  :focus {
    filter: drop-shadow(1px 3px 4px #d3d3d3);
    display: inline;
    outline-color: ${p => p.theme.colors.link};
  }
`;

const Text = styled.span`
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 5;

  overflow: visible;
  text-overflow: unset;

  display: none;
  box-shadow: 2px 3px 5px #999;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  text-align: center;
  border-radius: ${p => p.theme.radii.big};
  padding: 5px 5px;

  /* Position the tooltip */
`;

function check(el) {
  var curOverf = el.style.overflow;

  if (!curOverf || curOverf === 'visible') el.style.overflow = 'hidden';

  var isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;

  el.style.overflow = curOverf;

  console.log(
    el,
    el.clientWidth,
    el.scrollWidth,
    isOverflowing,
    el.style.overflow
  );
  return isOverflowing;
}

const PetInfo = props => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const elements = document.querySelectorAll('.data');
    for (let i = 0; i < elements.length; i++) {
      if (check(elements[i])) {
        elements[i].classList.add('overflow');
      } else elements[i].classList.remove('overflow');
    }
  }, [windowWidth]);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowWidth(window.innerWidth);
      console.log('done');
    }, 300);

    window.addEventListener('resize', debouncedHandleResize);

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <Ul>
      <NamesContainer>
        <ItemBold>Name:</ItemBold>
        <ItemBold>Birthday:</ItemBold>
        <ItemBold>Breed:</ItemBold>
        <ItemBold>Location:</ItemBold>
        <ItemBold>The sex:</ItemBold>
        <ItemBold>Email:</ItemBold>
        <ItemBold>Phone:</ItemBold>
        {props.data?.category === 'sell' && <ItemBold>Price:</ItemBold>}
      </NamesContainer>
      <InfoContainer>
        <Item>
          <Item className="data">{props.data?.name || 'unknown'}</Item>
          <Text>{props.data?.name}</Text>
        </Item>
        <Item>
          <Item className="data">{props.data?.birthday || 'unknown'}</Item>
          <Text>{props.data?.birthday}</Text>
        </Item>
        <Item>
          <Item className="data">{props.data?.breed || 'unknown'}</Item>
          <Text>{props.data?.breed}</Text>
        </Item>
        <Item>
          <Item className="data">{props.data?.location || 'unknown'}</Item>
          <Text>{props.data?.location}</Text>
        </Item>
        <Item className="data">{props.data?.sex || 'unknown'}</Item>
        <Item>
          <Link className="data" href={`mailto:${props.data?.owner.email}`}>
            {props.data?.owner.email || 'unknown'}
          </Link>
          <Text>{props.data?.owner.email}</Text>
        </Item>
        <Item>
          <Link className="data" href={`tel:${props.data?.owner.phone}`}>
            {props.data?.owner.phone || 'unknown'}
          </Link>
          <Text>{props.data?.owner.phone}</Text>
        </Item>
        {props.data?.category === 'sell' && (
          <Item>
            <Item className="data">{props.data?.price || 'unknown'}</Item>
            <Text>{props.data?.owner.price}</Text>
          </Item>
        )}
      </InfoContainer>
    </Ul>
  );
};

PetInfo.propTypes = {
  data: PropTypes.object,
};

export default PetInfo;
