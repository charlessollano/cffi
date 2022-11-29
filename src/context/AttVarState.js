import React, { createContext, useReducer } from "react";

const initialState = {
  genders: [{ id: 1, name: "", status: "Pending" }],
  ranks: [{ id: 1, name: "", status: "Pending" }],
  positions: [{ id: 1, name: "", status: "Pending" }],
  regions: [{ id: 1, name: "", regCode: 0, status: "Pending" }],
  provinces: [{ id: 1, name: "", regCode: 0, provCode: 0, status: "Pending" }],
  citymunis: [{ id: 1, name: "", regCode: 0, provCode: 0, citymuniCode: 0, status: "Pending" }],
  barangays: [
    { id: 1, name: "", regCode: 0, provCode: 0, citymuniCode: 0, brgyCode: 0, status: "Pending" },
  ],
};

const AttVarReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GENDER": {
      return {
        ...state,
        genders: [...state.genders, action.payload],
      };
    }
    case "ADD_RANK": {
      return {
        ...state,
        ranks: [...state.ranks, action.payload],
      };
    }
    case "ADD_POSITION": {
      return {
        ...state,
        positions: [...state.positions, action.payload],
      };
    }
    case "ADD_REGION": {
      return {
        ...state,
        regions: [...state.regions, action.payload],
      };
    }
    case "ADD_PROVINCE": {
      return {
        ...state,
        provinces: [...state.provinces, action.payload],
      };
    }
    case "ADD_CITYMUNI": {
      return {
        ...state,
        citymunis: [...state.citymunis, action.payload],
      };
    }
    case "ADD_BRGY": {
      return {
        ...state,
        barangays: [...state.barangays, action.payload],
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
    case "EDIT_RANK": {
      const updatedRank = action.payload;
      const ranks = state.ranks.map((rank) => {
        if (rank.id === updatedRank.id) {
          return updatedRank;
        }
        return rank;
      });
      return {
        ...state,
        ranks,
      };
    }
    case "EDIT_POSITION": {
      const updatedPosition = action.payload;
      const positions = state.positions.map((position) => {
        if (position.id === updatedPosition.id) {
          return updatedPosition;
        }
        return position;
      });
      return {
        ...state,
        positions,
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
    case "DELETE_GENDER": {
      const genderDel = state.genders.filter((gender) => gender.id !== action.payload);

      return {
        ...state,
        genderDel,
      };
    }
    case "DELETE_RANK": {
      const rankDel = state.ranks.filter((rank) => rank.id !== action.payload);

      return {
        ...state,
        rankDel,
      };
    }
    case "DELETE_POSITION": {
      const positionDel = state.positions.filter((position) => position.id !== action.payload);

      return {
        ...state,
        positionDel,
      };
    }
    case "DELETE_REGION": {
      const regionDel = state.regions.filter((region) => region.id !== action.payload);

      return {
        ...state,
        regionDel,
      };
    }
    case "DELETE_PROVINCE": {
      const provinceDel = state.provinces.filter((province) => province.id !== action.payload);

      return {
        ...state,
        provinceDel,
      };
    }
    case "DELETE_CITYMUNI": {
      const citymuniDel = state.citymunis.filter((citymuni) => citymuni.id !== action.payload);

      return {
        ...state,
        citymuniDel,
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

export const AttVarContext = createContext(initialState);
export const AttVarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AttVarReducer, initialState);
  return <AttVarContext.Provider value={{ state, dispatch }}>{children}</AttVarContext.Provider>;
};
