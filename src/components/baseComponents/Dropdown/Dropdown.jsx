import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { DropdownWrapper, Input, Menu, Item, InputContainer } from './style';
const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

export const Dropdown = ({ placeHolder, options, setValue, height }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });
  const handleInputClick = e => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  const getDisplay = () => {
    // if (selectedValue) {
    //   return selectedValue.label;
    // }
    return placeHolder;
  };

  const onItemClick = option => {
    setValue(option.value);
    setSelectedValue(option);
  };

  const isSelected = option => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <DropdownWrapper onClick={handleInputClick}>
      <Input onKeyPress={e => e.key === 'Enter' && handleInputClick(e)} />
      <InputContainer>
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <Icon />
        {showMenu && (
          <Menu style={{ maxHeight: `${height}` }}>
            {options.map(option => (
              <Item
                onClick={() => onItemClick(option)}
                className={isSelected(option) && 'selected'}
                key={option.label}
              >
                {option.label}
              </Item>
            ))}
          </Menu>
        )}
      </InputContainer>
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  placeHolder: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  setValue: PropTypes.func.isRequired,
  height: PropTypes.string,
};
