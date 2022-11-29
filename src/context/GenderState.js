import React, { createContext, useReducer } from "react";

export const initialState = {
  genders: [{ id: 1, name: "", status: "Pending" }],
};

export const GenderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GENDER": {
      return {
        ...state,
        genders: [...state.genders, action.payload],
      };
    }
    case "EDIT_GENDER": {
      const updatedGender = action.payload;
      const genders = state.genders.map((gender) => {
        if (gender.id === updatedGender.id) {
          return updatedGender;
        }
        return gender;
      });
      return {
        ...state,
        genders,
      };
    }
    case "DELETE_GENDER": {
      const genderDel = state.genders.filter(
        (gender) => gender.id !== action.payload
      );

      return {
        ...state,
        genderDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const GenderContext = createContext(initialState);
export const GenderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GenderReducer, initialState);
  return (
    <GenderContext.Provider value={{ state, dispatch }}>
      {children}
    </GenderContext.Provider>
  );
};
