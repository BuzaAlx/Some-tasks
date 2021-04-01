import React from "react";

const ToogleButton = ({ isEditing, setIsEditing }) => {
  return (
    <button onClick={() => setIsEditing((value) => !value)}>
      {isEditing ? "escape" : "edit"}
    </button>
  );
};

export default ToogleButton;
