import { useState } from 'react';

export const regEx = (d) => {
  return d.replace(/ /g, "_");
}

export const groupBy = (objectArray, property) => {
  let result = objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
  // filter out blank fields 
  // mutates object
  function clean(obj) {
    for (var propName in obj) {
      if (propName === undefined || propName === 'undefined') {
        delete obj[propName];
      }
    }
    return obj;
  }

  return clean(result);
};

export const useActive = (initialState) => {
  const [activeValue, setActiveValue] = useState(initialState);
  const toggler = () => { setActiveValue(!activeValue) };
  return [activeValue, toggler]
};