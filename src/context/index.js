/**
=========================================================
* CFFI Admin Dashboard powered by Argon Dashboard 2 MUI - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, useContext, useReducer, useMemo } from "react";

import {
  BarangayReducer,
  BarangayContext,
  initialState as BarangayInitState,
} from "./BarangayState";
import {
  CityMuniReducer,
  CityMuniContext,
  initialState as CityMuniInitState,
} from "./CityMuniState";
import {
  GenderReducer,
  GenderContext,
  initialState as GenderInitState,
} from "./GenderState";
import {
  PositionReducer,
  PositionContext,
  initialState as PositionInitState,
} from "./PositionState";
import {
  ProvinceReducer,
  ProvinceContext,
  initialState as ProvinceInitState,
} from "./ProvinceState";
import {
  RankReducer,
  RankContext,
  initialState as RankInitState,
} from "./RankState";
import {
  RegionReducer,
  RegionContext,
  initialState as RegionInitState,
} from "./RegionState";
import {
  MemberReducer,
  MemberContext,
  initialState as MemberInitState,
} from "./MemberState";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Argon Dashboard 2 MUI main context
const Argon = createContext(null);

// Setting custom name for the context which is visible on react dev tools
Argon.displayName = "ArgonContext";

// Argon Dashboard 2 MUI reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "DARK_SIDENAV": {
      return { ...state, darkSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARK_MODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Argon Dashboard 2 MUI context provider
function ArgonControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    darkSidenav: false,
    sidenavColor: null,
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <Argon.Provider value={value}>{children}</Argon.Provider>;
}

// Argon Dashboard 2 MUI custom hook for using context
function useArgonController() {
  const context = useContext(Argon);

  if (!context) {
    throw new Error(
      "useArgonController should be used inside the ArgonControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the ArgonControllerProvider
ArgonControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) =>
  dispatch({ type: "MINI_SIDENAV", value });
const setDarkSidenav = (dispatch, value) =>
  dispatch({ type: "DARK_SIDENAV", value });
const setSidenavColor = (dispatch, value) =>
  dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch, value) =>
  dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch, value) =>
  dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch, value) => dispatch({ type: "DARK_MODE", value });

export {
  ArgonControllerProvider,
  useArgonController,
  setMiniSidenav,
  setDarkSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
};

export const GlobalReducer = {
  BarangayReducer,
  CityMuniReducer,
  GenderReducer,
  MemberReducer,
  PositionReducer,
  ProvinceReducer,
  RankReducer,
  RegionReducer,
};

export const GlobalContext = createContext({
  BarangayContext,
  CityMuniContext,
  GenderContext,
  MemberContext,
  PositionContext,
  ProvinceContext,
  RankContext,
  RegionContext,
});

const GlobalInitialState = {
  barangays: BarangayInitState.barangays,
  citymunis: CityMuniInitState.citymunis,
  genders: GenderInitState.genders,
  members: MemberInitState.members,
  positions: PositionInitState.positions,
  provinces: ProvinceInitState.provinces,
  ranks: RankInitState.ranks,
  regions: RegionInitState.regions
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, GlobalInitialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
