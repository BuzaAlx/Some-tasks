import React, { useState } from "react";
import ToogleButton from "./ToogleButton";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../redux/reducer";
import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import TableRowEdit from "./TableRowEdit";

const TableRow = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleClick = async (id) => {
    dispatch(deleteUserThunk(id));
  };

  if (isEditing)
    return (
      <TableRowEdit
        {...props}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    );

  let { id, firstName, lastName } = props;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td className="row__action-col">
        <ToogleButton setIsEditing={setIsEditing} isEditing={isEditing} />
        <Button
          className="ml-1"
          size="sm"
          variant="danger"
          onClick={() => handleClick(id)}
        >
          <Trash />
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
