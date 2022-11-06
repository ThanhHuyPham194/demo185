import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  filter: { search: "", sort: "", district: 0, category: [] },
};

export const relicsReducer = createSlice({
  name: "relics",
  initialState,
  reducers: {
    fetInfoRelics: () => {},
    getInfoRelics: (state, action) => {
      return {
        ...state,
        data: [...action.payload],
      };
    },
    setFilterSearchRelics: (state, action) => {
      return {
        ...state,
        filter: { ...state.filter, search: action.payload },
      };
    },
    setFilterDistrictRelics: (state, action) => {
      return {
        ...state,
        filter: { ...state.filter, district: action.payload },
      };
    },
    setFilterSortRelics: (state, action) => {
      return {
        ...state,
        filter: { ...state.filter, sort: action.payload },
      };
    },
    setFilterCategory: (state, action) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          category: [...state.filter.category, action.payload],
        },
      };
    },
    removeFilterCategory: (state, action) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          category: state.filter.category.filter(
            (item) => item !== action.payload
          ),
        },
      };
    },
  },
});
export const {
  getInfoRelics,
  fetInfoRelics,
  setFilterSearchRelics,
  setFilterDistrictRelics,
  setFilterSortRelics,
  setFilterCategory,
  removeFilterCategory,
} = relicsReducer.actions;

export default relicsReducer.reducer;
