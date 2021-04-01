import React, { useState } from "react";
import { createUserThunk } from "../redux/reducer";
import { useDispatch } from "react-redux";
import { FormControl, Button } from "react-bootstrap/";
import { PersonPlus } from "react-bootstrap-icons";

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
        <FormControl
          className="row__input"
          type="text"
          value={userData.firstName}
          onChange={({ target }) =>
            setUserData({ ...userData, firstName: target.value })
          }
        />
      </td>
      <td>
        <FormControl
          className="row__input"
          type="text"
          value={userData.lastName}
          onChange={({ target }) =>
            setUserData({ ...userData, lastName: target.value })
          }
        />
      </td>
      <td>
        <Button
          variant="primary"
          size="sm"
          disabled={!userData.firstName || !userData.lastName}
          onClick={handleClick}
        >
          <PersonPlus />
        </Button>
      </td>
    </tr>
  );
}

export default AddNewRow;
