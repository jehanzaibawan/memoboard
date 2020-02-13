import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';

const iconPropTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.any,
  onClick: PropTypes.any
};

const iconDefaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {}
};

type IconPropTypes = PropTypes.InferProps<typeof iconPropTypes>;

const IconComponent = Styled.span<IconPropTypes>(
  ({ content, color }) => css`
    display: flex;
    width: 12px;
    height: 12px;
    cursor: pointer;
    color: ${color ? color : `#000`};

    :after {
      font-family: 'icomoon';
      font-size: 12px;
      content: '${content}';
    }
  `
);

const ClickableIcon: React.FC<IconPropTypes> = (
  props: IconPropTypes
): ReactElement<IconPropTypes> => {
  return <IconComponent {...props} />;
};

ClickableIcon.propTypes = iconPropTypes;
ClickableIcon.defaultProps = iconDefaultProps;

export default ClickableIcon;
