export const ADD_CATEGORY = "ADD_CATEGORY";
export const SET_ACTIVE_ADD_CATEGORY_TYPE = "SET_ACTIVE_ADD_CATEGORY_TYPE";
export const ADD_ACCOUNT = "ADD_ACCOUNT";


export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    value: category,
  }
};

export const setActiveAddCategoryType = (categoryType) => {
  return {
    type: SET_ACTIVE_ADD_CATEGORY_TYPE,
    value: categoryType,
  }
};

export const addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    value: account,
  }
};