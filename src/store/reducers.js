import {ADD_ACCOUNT, ADD_CATEGORY, SET_ACTIVE_ADD_CATEGORY_TYPE} from "./actions";


const initialState = {
  categories: [
    {name: "Salary", type: "income"},
    {name: "Upwork", type: "income"},
    {name: "Food", type: "outcome"},
    {name: "C4 Cactus", type: "outcome"},
  ],
  activeAddCategoryType: "outcome",
  accounts: [
    {name: "iClip", type: "cash", balance: 20.0},
    {name: "Wallet", type: "cash", balance: 25.0},
    {name: "CC-XXXX", type: "cc", balance: 100.0},
    {name: "CC-YYYY", type: "cc", balance: 100.0},
  ]
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {...state, categories: [...state.categories, action.value]};
    case SET_ACTIVE_ADD_CATEGORY_TYPE:
      return {...state, activeAddCategoryType: action.value};
    case ADD_ACCOUNT:
      return {...state, accounts: [...state.accounts, action.value]};
    default:
      return state;
  }
};

export default rootReducer;