import React from "react";
import ToogleButton from "../ToogleButton";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../../redux/reducer";

const UserRowMarkUp = ({
  firstName,
  lastName,
  id,
  setIsEditing,
  isEditing,
}) => {
  const dispatch = useDispatch();

  const handleClick = async (id) => {
    dispatch(deleteUserThunk(id));
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>
        <ToogleButton setIsEditing={setIsEditing} isEditing={isEditing} />
        <button onClick={() => handleClick(id)}>delete</button>
      </td>
    </tr>
  );
};

export default UserRowMarkUp;
