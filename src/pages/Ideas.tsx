import React, { ReactElement, useState, useEffect } from 'react';
import Styled from 'styled-components';
import _ from 'lodash';
import Header from '../components/Header';
import Divider from '../components/Divider';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import EditableCard from '../components/EditableCard';
import ClickableIcon from '../components/ClickableIcon';
import Notification from '../components/Notification';
import { getIdeas, postIdea, updateIdea, deleteIdea } from '../APIs/fakeAPI';
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
  const [newRectFlag, setNewRectFlag] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState('default');
  const [notify, setNotify] = useState({ visible: false, message: '' });

  useEffect(() => {
    const ideas: Array<Idea> = getIdeas();
    setIdeas(ideas);
  }, [newRectFlag]);

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

  const setNofitication = (message: string): void => {
    setNotify({ visible: true, message });

    setTimeout(() => setNotify({ visible: false, message }), 3000);
  };

  return (
    <Wrapper>
      <Header
        title="Ideas"
        rightSection={
          <>
            <Dropdown
              label="Sort by"
              size="small"
              options={sortingOptions}
              onChange={(e: any): void => {
                setNewRectFlag(false);
                const value = e.target.value;
                if (value === 'title') setSortBy('title');
                else if (value === 'created_date') setSortBy('created_date');
                else setSortBy('default');
              }}
            />
            <Divider width="2px" />
            <Button
              size="small"
              isPrimary
              onClick={(): void => {
                postIdea();
                setNewRectFlag(true);
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
        {((): any => {
          if (newRectFlag) {
            const latestRec: Idea = ideas[ideas.length - 1];
            const composed = (
              <SubWrapper>
                <ClickableIcon
                  content="\e9ad"
                  onClick={(): void => {
                    deleteIdea(latestRec.id);
                    setNewRectFlag(false);
                  }}
                />
                <EditableCard
                  width="150px"
                  height="150px"
                  dropShadow
                  title={latestRec.title}
                  content={latestRec.body}
                  footer={latestRec.createdDate}
                  onBlur={(e: any): void => {
                    updateIdea(latestRec.id, e.target.type, e.target.value);
                    setNofitication('Idea updated successfully!');
                    // setIdeas(getIdeas()); // not necessary to call it here
                  }}
                  setFocus
                />
              </SubWrapper>
            );

            ideas.splice(ideas.length - 1, 1);

            return composed;
          }
        })()}

        {((): any => {
          const sortedIdeas = _.sortBy(ideas, o => {
            if (sortBy === 'title') return o.title;
            else if (sortBy === 'created_date') return o.createdDate;
            return o.id;
          });
          return sortedIdeas.map((value: Idea, index) => (
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
                title={value.title}
                content={value.body}
                footer={value.createdDate}
                onBlur={(e: any): void => {
                  updateIdea(value.id, e.target.type, e.target.value);
                  setNofitication('Idea updated successfully!');
                  // setIdeas(getIdeas()); // not necessary to call it here
                }}
              />
            </SubWrapper>
          ));
        })()}
      </CardContainer>
      {notify.visible && <Notification>{notify.message}</Notification>}
    </Wrapper>
  );
};

export default Ideas;
