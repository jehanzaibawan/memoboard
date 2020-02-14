import { getData, storeData } from '../storage/storage';
import { Idea } from '../shared/interfaces';
import { formatDate } from '../utils';

const getIdeas = (): Array<Idea> => {
  return getData();
};

const postIdea = (): boolean => {
  const existingData: Array<Idea> = getData();

  // generate unique ID for every record
  let uniqueID = 1;
  if (existingData.length > 0) {
    uniqueID = existingData[existingData.length - 1].id + 1;
  }

  existingData.push({
    id: uniqueID,
    createdDate: formatDate(new Date()),
    title: '',
    body: ''
  });

  storeData(existingData);

  return true;
};

const updateIdea = (id: number, field: string, newValue: string): boolean => {
  const existingData: Array<Idea> = getData();

  const updateIndex = existingData.findIndex((data: Idea) => {
    return data.id === id;
  });

  if (field === 'text') existingData[updateIndex].title = newValue;
  if (field === 'textarea') existingData[updateIndex].body = newValue;

  storeData(existingData);

  return true;
};

const deleteIdea = (id: number): boolean => {
  const existingData: Array<Idea> = getData();

  const deleteIndex = existingData.findIndex((data: Idea) => {
    return data.id === id;
  });

  existingData.splice(deleteIndex, 1);

  storeData(existingData);
  return true;
};

export { getIdeas, postIdea, updateIdea, deleteIdea };
