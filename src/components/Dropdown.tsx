import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';

const dropDownPropTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string
    })
  ),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes.any,
};

const dropDownDefaultProps = {
  label: 'Select',
  options: []
};

type DropDownPropTypes = PropTypes.InferProps<typeof dropDownPropTypes>;

const DropdownComponent = Styled.select<DropDownPropTypes>(
  ({ size }) => css`
    width: 100px;
    font-family: 'Actor';
    font-size: 12px;
    color: #312b24;
    border: none;
    ${((): string => {
      if (size === 'large') return 'height: 45px;';
      if (size === 'medium') return 'height: 35px;';
      return 'height: 25px;';
    })()};
    :focus {
      outline: thin dotted #fff;
    }
    > option {
      border: none;
    }
  `
);

const Dropdown: React.FC<DropDownPropTypes> = (
  props: DropDownPropTypes
): ReactElement<DropDownPropTypes> => {
  const { label, options, onChange } = props;
  return (
    <DropdownComponent onChange={onChange}>
      <option value="default">{label}</option>
      {options!.map((option, index) => (
        <option key={`dropdownOpt-${index}`} value={option!.value}>
          {option!.label}
        </option>
      ))}
    </DropdownComponent>
  );
};

Dropdown.propTypes = dropDownPropTypes;
Dropdown.defaultProps = dropDownDefaultProps;

export default Dropdown;
