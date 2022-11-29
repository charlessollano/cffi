import React, { createContext, useReducer } from "react";

export const initialState = {
  citymunis: [
    {
      id: 1,
      name: "",
      regCode: 0,
      provCode: 0,
      citymuniCode: 0,
      status: "Pending",
    },
  ],
};

export const CityMuniReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITYMUNI": {
      return {
        ...state,
        citymunis: [...state.citymunis, action.payload],
      };
    }
    case "EDIT_CITYMUNI": {
      const updatedCityMuni = action.payload;
      const citymunis = state.citymunis.map((citymuni) => {
        if (citymuni.id === updatedCityMuni.id) {
          return updatedCityMuni;
        }
        return citymuni;
      });
      return {
        ...state,
        citymunis,
      };
    }
    case "DELETE_CITYMUNI": {
      const citymuniDel = state.citymunis.filter((citymuni) => citymuni.id !== action.payload);

      return {
        ...state,
        citymuniDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const CityMuniContext = createContext(initialState);
export const CityMuniProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CityMuniReducer, initialState);
  return (
    <CityMuniContext.Provider value={{ state, dispatch }}>{children}</CityMuniContext.Provider>
  );
};
