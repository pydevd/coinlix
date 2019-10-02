export const groupBy = (array, key) => {
  let groups = {};

  for (const item of array) {
    groups[item[key]] = groups[item[key]] || [];
    groups[item[key]].push(item);
  }

  return groups;
};