import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const buttonPropTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isPrimary: PropTypes.bool
};

type ButtonPropTypes = PropTypes.InferProps<typeof buttonPropTypes>;

const Button = Styled.button<ButtonPropTypes>(
  ({ size, isPrimary }) => css`
    width: 100px;
    background-color: #735edf;
    border: none;
    padding: 0;
    font-family: 'Actor';
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    ${isPrimary ? `background-color: #735edf;` : `background-color: #6b757c;`}
    ${((): string => {
      if (size === 'large') return 'height: 45px;';
      if (size === 'medium') return 'height: 35px;';
      return 'height: 25px;';
    })()};
    :focus {
      outline: thin dotted #fff;
    }
  `
);

Button.propTypes = buttonPropTypes;

export default Button;
