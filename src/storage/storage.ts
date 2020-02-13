/* This file is reponsible for storing the data 
   into the storage(localStorage in our case),
   we can change to other storage options(session storage etc.) if we 
   want by placing the logic here and it wont effect the
   other layers who ever is utlizing this for storage.
*/

import { Idea } from '../shared/interfaces';

const storeData = (data: Array<Idea>): void => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem('data', stringifiedData);
};

const getData = (): Array<Idea> => {
  const data = localStorage.getItem('data');
  return JSON.parse(data || '[]');
};

export { storeData, getData };
