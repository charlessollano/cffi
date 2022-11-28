import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Home from "./Home";
import { GlobalContext } from "../Store/Globalstate";

const AddEmployees = () => {
  const history = useHistory();
  const [empId, setEmpId] = useState();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { state, dispatch } = useContext(GlobalContext);
  const formSubmit = e => {
    e.preventDefault();
    const newEmployee = {
      id: !editMode ? Date.now() : empId,
      name,
      location,
      designation
    };
    if (!editMode) {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: newEmployee
      });
    } else {
      dispatch({
        type: "EDIT_EMPLOYEE",
        payload: newEmployee
      });
    }
    setName("");
    setLocation("");
    setDesignation("");
    setEditMode(false);
  };

  const cancel = () => {
    setName("");
    setLocation("");
    setDesignation("");
    setEditMode(false);
  };
  const editEmployee = employee => {
    setEmpId(employee.id);
    setName(employee.name);
    setLocation(employee.location);
    setDesignation(employee.designation);
    setEditMode(true);
  };
  const deleteEmp = id => {
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id
    })
  };
  return (
    <React.Fragment>
      {/*<Home />*/}
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={formSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of the Employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              type="text"
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              type="text"
              placeholder="Enter your location"
              onChange={e => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Designation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              type="text"
              placeholder="Enter your designation"
              onChange={e => setDesignation(e.target.value)}
              value={designation}
            />
          </div>{" "}
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {!editMode ? "ADD EMPLOYEE" : "EDIT EMPLOYEE"}
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/" onClick={cancel}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
      <div className="w-full max-w-sm container mt-10 mx-auto">
        {state.employees.map(employee => {
          return (
            <div class="flex" key={employee.id}>
              <div class="w-1/5 bg-gray-500 p-4 text-center text-gray-200">
                {employee.name}
              </div>
              <div class="w-1/5 bg-gray-400 p-4 text-center text-gray-700">
                {employee.designation}
              </div>
              <div class="w-1/5 bg-gray-500 p-4 text-center text-gray-700">
                {employee.location}
              </div>
              <div class="w-1/5 bg-gray-400 p-4 text-center text-gray-700">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => editEmployee(employee)}
                >
                  Edit
                </button>
              </div>
              <div class="w-1/5 bg-gray-500 p-4 text-center text-gray-700">
                <button
                  class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteEmp(employee)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default AddEmployees;
