import React, { createContext, useReducer } from "react";

export const initialState = {
  provinces: [{ id: 1, name: "", regCode: 0, provCode: 0, status: "Pending" }],
};

export const ProvinceReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROVINCE": {
      return {
        ...state,
        provinces: [...state.provinces, action.payload],
      };
    }
    case "EDIT_PROVINCE": {
      const updatedProvince = action.payload;
      const provinces = state.provinces.map((province) => {
        if (province.id === updatedProvince.id) {
          return updatedProvince;
        }
        return province;
      });
      return {
        ...state,
        provinces,
      };
    }
    case "DELETE_PROVINCE": {
      const provinceDel = state.provinces.filter(
        (province) => province.id !== action.payload
      );

      return {
        ...state,
        provinceDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const ProvinceContext = createContext(initialState);
export const ProvinceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProvinceReducer, initialState);
  return (
    <ProvinceContext.Provider value={{ state, dispatch }}>
      {children}
    </ProvinceContext.Provider>
  );
};
