import {ADD_CATEGORY} from "./actions";

const initialState = {
  categories: [
    {name: "Salary", type: "income"},
    {name: "Upwork", type: "income"},
    {name: "Food", type: "outcome"},
    {name: "C4 Cactus", type: "outcome"}
  ]
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {...state, categories: [...state.categories, action.value]};
    default:
      return state;
  }
};

export default rootReducer;