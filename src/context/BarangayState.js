import React, { createContext, useReducer } from "react";

export const initialState = {
  barangays: [
    {
      id: 1,
      name: "",
      regCode: 0,
      provCode: 0,
      citymuniCode: 0,
      brgyCode: 0,
      status: "Pending",
    },
  ],
};

export const BarangayReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BRGY": {
      return {
        ...state,
        barangays: [...state.barangays, action.payload],
      };
    }
    case "EDIT_BRGY": {
      const updatedBrgy = action.payload;
      const barangays = state.barangays.map((barangay) => {
        if (barangay.id === updatedBrgy.id) {
          return updatedBrgy;
        }
        return barangay;
      });
      return {
        ...state,
        barangays,
      };
    }
    case "DELETE_BRGY": {
      const barangayDel = state.barangays.filter((barangay) => barangay.id !== action.payload);

      return {
        ...state,
        barangayDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const BarangayContext = createContext(initialState);
export const BarangayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BarangayReducer, initialState);
  return (
    <BarangayContext.Provider value={{ state, dispatch }}>{children}</BarangayContext.Provider>
  );
};
