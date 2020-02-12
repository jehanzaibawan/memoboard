import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const buttonPropTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

type ButtonPropTypes = PropTypes.InferProps<typeof buttonPropTypes>;

const Button = Styled.button<ButtonPropTypes>(
  ({ size }) => css`
    width: 100px;
    ${((): string => {
      if (size === 'large') return 'height: 45px;';
      if (size === 'medium') return 'height: 35px;';
      return 'height: 25px;';
    })()}
  `
);

export default Button;
