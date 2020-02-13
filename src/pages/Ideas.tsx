import React, { ReactElement, useState, useEffect } from 'react';
import Styled from 'styled-components';
import Header from '../components/Header';
import Divider from '../components/Divider';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import EditableCard from '../components/EditableCard';
import ClickableIcon from '../components/ClickableIcon';
import { getIdeas, postIdea, deleteIdea } from '../APIs/fakeAPI';
import { Idea } from '../shared/interfaces';

const Wrapper = Styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const CardContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SubWrapper = Styled.div`
  display: flex;
  position: relative;

  :hover {
    > span {
      display: flex;
    }
  }

  > span {
    display: none;
    position: absolute;
    bottom: 18px;
    right: 16px;
  }
`;

const Ideas = (): ReactElement => {
  const [ideas, setIdeas] = useState<Array<Idea>>([]);

  useEffect(() => {
    const ideas: Array<Idea> = getIdeas();
    setIdeas(ideas);
  }, []);

  const sortingOptions = [
    {
      value: 'title',
      label: 'Title'
    },
    {
      value: 'created_date',
      label: 'Created date'
    }
  ];

  return (
    <Wrapper>
      <Header
        title="Ideas"
        rightSection={
          <>
            <Dropdown label="Sort by" size="small" options={sortingOptions} />
            <Divider width="2px" />
            <Button
              size="small"
              isPrimary
              onClick={(): void => {
                postIdea();
                setIdeas(getIdeas());
              }}
            >
              Add new
            </Button>
          </>
        }
        fixed
      />
      <Divider height="35px" />
      <CardContainer>
        {ideas.map((value: Idea, index) => (
          <SubWrapper key={`editableCard-${index}`}>
            <ClickableIcon
              content="\e9ad"
              onClick={(): void => {
                deleteIdea(value.id);
                setIdeas(getIdeas());
              }}
            />
            <EditableCard
              width="150px"
              height="150px"
              dropShadow
              title={value.id}
              content={value.body}
              footer={value.createdDate}
            />
          </SubWrapper>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Ideas;
