import React, { useState } from "react";
import { createUserThunk } from "../redux/reducer";
import { useDispatch } from "react-redux";

function AddNewRow() {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });
  const dispatch = useDispatch();

  const resetForm = () => {
    setUserData({ firstName: "", lastName: "" });
  };

  const handleClick = async () => {
    dispatch(createUserThunk(userData));
    resetForm();
  };

  return (
    <tr>
      <td>#</td>
      <td>
        <input
          className="row__input"
          type="text"
          value={userData.firstName}
          onChange={({ target }) =>
            setUserData({ ...userData, firstName: target.value })
          }
        />
      </td>
      <td>
        <input
          className="row__input"
          type="text"
          value={userData.lastName}
          onChange={({ target }) =>
            setUserData({ ...userData, lastName: target.value })
          }
        />
      </td>
      <td>
        <button
          disabled={!userData.firstName || !userData.lastName}
          onClick={handleClick}
        >
          Add new user
        </button>
      </td>
    </tr>
  );
}

export default AddNewRow;
