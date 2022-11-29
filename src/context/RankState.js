import React, { createContext, useReducer } from "react";

export const initialState = {
  ranks: [{ id: 1, name: "", status: "Pending" }],
};

export const RankReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RANK": {
      return {
        ...state,
        ranks: [...state.ranks, action.payload],
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
    case "DELETE_RANK": {
      const rankDel = state.ranks.filter((rank) => rank.id !== action.payload);

      return {
        ...state,
        rankDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const RankContext = createContext(initialState);
export const RankProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RankReducer, initialState);
  return <RankContext.Provider value={{ state, dispatch }}>{children}</RankContext.Provider>;
};
