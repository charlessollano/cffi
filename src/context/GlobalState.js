import React, { createContext, useReducer } from "react";
import { AttVarContext } from "AttVarState";

const { state: attVarState, dispatch: attVarDispatch } = useContext(AttVarContext);

const initialState = {
  members: [
    {
      id: 1,
      firstName: "Vasu",
      middleName: "Vasu",
      lastName: "Vasu",
      fullAddress: "Bangalore",
      position: "Sr Manager",
      rank: "1",
      occupation: "",
      contactNum: "",
      email: "",
      status: "Pending",
    },
  ],
  ...attVarState,
};

const MemberReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MEMBER": {
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    }
    case "EDIT_MEMBER": {
      const updatedMember = action.payload;
      const members = state.members.map((member) => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      });
      return {
        ...state,
        members,
      };
    }
    case "DELETE_MEMBER": {
      console.log(state.memberDetails);
      const memberDel = state.members.filter((member) => member.id !== action.payload);

      return {
        ...state,
        memberDel,
      };
    }
    default: {
      return state;
    }
  }
};

export const MemberContext = createContext(initialState);
export const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MemberReducer, initialState);
  return <MemberContext.Provider value={{ state, dispatch }}>{children}</MemberContext.Provider>;
};
