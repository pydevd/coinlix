export const ADD_CATEGORY = "ADD_CATEGORY";


export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    value: category,
  }
};