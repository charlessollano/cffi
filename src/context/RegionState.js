import React, { createContext, useReducer } from "react";

export const initialState = {
  regions: [{ id: 1, name: "", regCode: 0, status: "Pending" }]
};

export const RegionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_REGION": {
      return {
        ...state,
        regions: [...state.regions, action.payload],
      };
    }
    case "EDIT_REGION": {
      const updatedRegion = action.payload;
      const regions = state.regions.map((region) => {
        if (region.id === updatedRegion.id) {
          return updatedRegion;
        }
        return region;
      });
      return {
        ...state,
        regions,
      };
    }
    case "DELETE_REGION": {
      const regionDel = state.regions.filter((region) => region.id !== action.payload);

      return {
        ...state,
        regionDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const RegionContext = createContext(initialState);
export const RegionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegionReducer, initialState);
  return <RegionContext.Provider value={{ state, dispatch }}>{children}</RegionContext.Provider>;
};
