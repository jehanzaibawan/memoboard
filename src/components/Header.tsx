import React, { ReactElement } from 'react';
import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const headerPropTypes = {
  title: PropTypes.string,
  fixed: PropTypes.bool
};

const headerDefaultProps = {
  title: 'Title'
};

type HeaderPropTypes = PropTypes.InferProps<typeof headerPropTypes>;

const HeaderWrapper = Styled.div<HeaderPropTypes>(
  ({ fixed }) => css`
    display: flex;
    width: calc(100% - 4px);
    height: 35px;
    margin: 2px;
    background-color: #fab930;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    align-items: center;
    ${fixed ? `position: fixed; top: 0;` : ``}
  `
);

const HeaderText = Styled.div`
  display: flex;
  font-family: 'Actor';
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
`;

const Header: React.FC<HeaderPropTypes> = (
  props: HeaderPropTypes
): ReactElement<HeaderPropTypes> => {
  const { title, fixed } = props;
  return (
    <HeaderWrapper fixed={fixed}>
      <HeaderText>{title}</HeaderText>
    </HeaderWrapper>
  );
};

Header.propTypes = headerPropTypes;
Header.defaultProps = headerDefaultProps;

export default Header;
