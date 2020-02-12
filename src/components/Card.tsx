import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const cardPropTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string,
  dropShadow: PropTypes.bool
};

const cardDefaultProps = {
  title: 'Title',
  content: 'Content',
  footer: 'Footer',
  dropShadow: false
};

type CardPropTypes = PropTypes.InferProps<typeof cardPropTypes>;

const CardWrapper = styled.div<CardPropTypes>(
  ({ width, height, dropShadow }) => css`
    display: flex;
    flex-direction: column;
    width: calc(${width} - 10px - 2px); /* to get the exact width */
    height: calc(${height} - 10px - 2px); /* to get the exact height */
    margin: 10px;
    padding: 5px;
    background-color: #fafafa;
    border-radius: 8px;
    border: 1px solid #ccc;
    ${dropShadow ? `box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);` : ``}
  `
);

const CardHeader = styled.div`
  display: flex;
  font-family: 'Actor';
  font-size: 14px;
  color: #312b24;
  font-weight: bold;
  border-bottom: 1px solid #757575;
`;

const CardContent = styled.div`
  display: flex;
  font-family: 'Gothic_A1';
  font-size: 13px;
  color: #4b4847;
  margin-top: 5.5px;
`;

const CardFooter = styled.div`
  display: flex;
  font-family: 'Gothic_A1';
  font-size: 11px;
  color: #8f8f8f;
  font-style: italic;
  margin-top: 2.5px;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Card: React.FC<CardPropTypes> = (
  props: CardPropTypes
): ReactElement<CardPropTypes> => {
  const { width, height, dropShadow, title, content, footer } = props;
  return (
    <CardWrapper width={width} height={height} dropShadow={dropShadow}>
      <CardHeader>{title}</CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </CardWrapper>
  );
};

Card.propTypes = cardPropTypes;
Card.defaultProps = cardDefaultProps;

export default Card;
