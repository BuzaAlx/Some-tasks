import React from "react";
import { Button } from "react-bootstrap/";
import { PencilSquare, XSquare } from "react-bootstrap-icons";

const ToogleButton = ({ isEditing, setIsEditing }) => {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => setIsEditing((value) => !value)}
    >
      {isEditing ? <XSquare /> : <PencilSquare />}
    </Button>
  );
};

export default ToogleButton;
