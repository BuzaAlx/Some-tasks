import React, { useState } from "react";
import { UserEditingRowMarkUp, UserRowMarkUp } from "./TableRow/index";

const Row = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <UserEditingRowMarkUp
      {...props}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
    />
  ) : (
    <UserRowMarkUp
      {...props}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
    />
  );
};

export default Row;
