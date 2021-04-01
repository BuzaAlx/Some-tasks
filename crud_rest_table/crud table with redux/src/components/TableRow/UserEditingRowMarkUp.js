import React, { useState, useEffect, useRef } from "react";

import ToogleButton from "../ToogleButton";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../redux/reducer";

const UserEditingRowMarkUp = ({
  firstName,
  lastName,
  id,
  setIsEditing,
  isEditing,
}) => {
  const [userData, setUserData] = useState({
    firstName,
    lastName,
  });
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  const handleClick = async (id) => {
    if (firstName === userData.firstName) {
      console.log("values is the same");
      setIsEditing(false);
      return;
    }
    dispatch(updateUserThunk(id, userData));
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      inputEl.current.focus();
    }
  }, [isEditing]);

  return (
    <tr className="row" key={id}>
      <td>{id}</td>
      <td>
        <input
          className="row__input"
          name="update_input"
          type="text"
          value={userData.firstName}
          onChange={({ target }) =>
            setUserData({ ...userData, firstName: target.value })
          }
          ref={inputEl}
        />
      </td>
      <td>
        <input
          className="row__input"
          name="update_input"
          type="text"
          value={userData.lastName}
          onChange={({ target }) =>
            setUserData({ ...userData, lastName: target.value })
          }
        />
      </td>
      <td>
        {isEditing && (
          <button onClick={() => handleClick(id)}>to server</button>
        )}
        <ToogleButton isEditing={isEditing} setIsEditing={setIsEditing} />
      </td>
    </tr>
  );
};

export default UserEditingRowMarkUp;
