import React, { createContext, useReducer } from "react";

const initialState = {
  positions: [{ id: 1, name: "", status: "Pending" }],
};

const PositionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POSITION": {
      return {
        ...state,
        positions: [...state.positions, action.payload],
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
    case "DELETE_POSITION": {
      const positionDel = state.positions.filter(
        (position) => position.id !== action.payload
      );

      return {
        ...state,
        positionDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const PositionContext = createContext(initialState);
export const PositionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PositionReducer, initialState);
  return (
    <PositionContext.Provider value={{ state, dispatch }}>
      {children}
    </PositionContext.Provider>
  );
};
