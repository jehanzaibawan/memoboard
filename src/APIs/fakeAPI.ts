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

const updateIdea = (): boolean => {
  return true;
};

const deleteIdea = (id: number): boolean => {
  const existingData: Array<Idea> = getData();
  const x = existingData.findIndex((data: Idea) => {
    return data.id === id;
  });
  console.log(x);
  existingData.splice(x, 1);
  storeData(existingData);

  return true;
};

export { getIdeas, postIdea, updateIdea, deleteIdea };
