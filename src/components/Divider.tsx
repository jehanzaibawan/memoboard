import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const dividerPropTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

const dividerDefaultProps = {
  width: '100%',
  height: '25px'
};

type DividerPropTypes = PropTypes.InferProps<typeof dividerPropTypes>;

const Divider = Styled.div<DividerPropTypes>(
  ({ width, height }) => css`
    display: flex;
    width: ${width};
    height: ${height};
  `
);

Divider.propTypes = dividerPropTypes;
Divider.defaultProps = dividerDefaultProps;

export default Divider;
