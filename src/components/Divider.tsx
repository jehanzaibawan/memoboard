import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const dividerPropTypes = {
  height: PropTypes.string
};

type DividerPropTypes = PropTypes.InferProps<typeof dividerPropTypes>;

const Divider = Styled.div<DividerPropTypes>(
  ({ height }) => css`
    display: flex;
    width: 100%;
    height: ${height};
  `
);

export default Divider;
