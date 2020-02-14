import React, { ReactElement, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';

const cardPropTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.any,
  content: PropTypes.any,
  footer: PropTypes.string,
  dropShadow: PropTypes.bool,
  onBlur: PropTypes.any,
  setFocus: PropTypes.bool
};

const cardDefaultProps = {
  title: 'Title',
  content: 'Content',
  footer: 'Footer',
  dropShadow: false,
  setFocus: false
};

type CardPropTypes = PropTypes.InferProps<typeof cardPropTypes>;

const CardWrapper = Styled.div<CardPropTypes>(
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

const CardHeader = Styled.input`
  height: 25px;
  padding: 0 5px;
  font-family: 'Actor';
  font-size: 14px;
  color: #312b24;
  font-weight: bold;
  border: none;
  :focus {
      outline: thin solid #757575;
  }
`;

const CardContent = Styled.textarea`
  height: 71px;
  padding: 5px;
  font-family: 'Gothic_A1';
  font-size: 13px;
  color: #4b4847;
  margin-top: 5.5px;
  resize: none;
  border: none;
  :focus {
      outline: thin solid #757575;

      + .counter {
        display: flex;
      }
  }
`;

const Counter = Styled.div`
  display: none;
  width: 100%;
  height: 12px;
  font-family: 'Gothic_A1';
  font-size: 9px;
  color: #4b4847;
  justify-content: flex-end;
`;

const CardFooter = Styled.div`
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

const EditableCard: React.FC<CardPropTypes> = (
  props: CardPropTypes
): ReactElement<CardPropTypes> => {
  const {
    width,
    height,
    dropShadow,
    title,
    content,
    footer,
    onBlur,
    setFocus
  } = props;

  const [headerText, setHeaderText] = useState('');
  const [contetText, setContetText] = useState('');
  const [counter, setCounter] = useState(0);

  const inputEl = useRef<any>(null);

  useEffect(() => {
    setHeaderText(title);
    setContetText(content);
    setCounter(content.length);

    if (setFocus) inputEl!.current.focus();
  }, [props]); // eslint-disable-line

  return (
    <CardWrapper width={width} height={height} dropShadow={dropShadow}>
      <CardHeader
        ref={inputEl}
        type="text"
        value={headerText}
        onChange={(event): void => {
          setHeaderText(event.target.value);
        }}
        placeholder="enter the title"
        maxLength={15}
        onBlur={onBlur}
      />
      <CardContent
        value={contetText}
        onChange={(event): void => {
          const target = event.target;
          setContetText(target.value);
          setCounter(target.value.length);
        }}
        placeholder="enter the description"
        maxLength={15}
        onBlur={onBlur}
      />
      {counter < 15 && (
        <Counter className="counter">Remaining chars {15 - counter}</Counter>
      )}
      <CardFooter>{footer}</CardFooter>
    </CardWrapper>
  );
};

EditableCard.propTypes = cardPropTypes;
EditableCard.defaultProps = cardDefaultProps;

export default EditableCard;
